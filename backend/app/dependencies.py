from datetime import datetime, timedelta
from jose import jwt
from fastapi import Depends, HTTPException, status, Cookie, Request
from app.db import get_db
from sqlalchemy.orm import Session
from app.models import User
import secrets
from app.models import RefreshToken
import logging

SECRET_KEY = "your-secret-key"  # load from .env
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 1 day
REFRESH_TOKEN_EXPIRE_DAYS = 7

logger = logging.getLogger(__name__)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.JWTError:
        return None

def get_current_user(
    request: Request,
    access_token: str = Cookie(None),
    db: Session = Depends(get_db)
):
    # Log what cookies FastAPI actually sees
    logger.info(f"Incoming cookies: {request.cookies}")

    if not access_token:
        logger.warning("No access_token cookie found in request!")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing auth cookie"
        )
    
    payload = decode_access_token(access_token)
    if not payload or "sub" not in payload:
        logger.error("Invalid or undecodable token")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid auth token"
        )
    
    user = db.query(User).filter(User.email == payload["sub"]).first()
    if not user:
        logger.warning(f"User not found for sub={payload.get('sub')}")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return user

def create_refresh_token(user_id: int, db: Session):
    token = secrets.token_urlsafe(32)  # random string
    expires_at = datetime.utcnow() + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)

    refresh_token = RefreshToken(
        user_id=user_id,
        token=token,
        expires_at=expires_at
    )
    db.add(refresh_token)
    db.commit()
    db.refresh(refresh_token)

    return token