from fastapi import APIRouter, HTTPException, Depends, Response
from sqlalchemy.orm import Session
from app.models import User, RefreshToken
from app.schemas import UserCreate, UserLogin
from app.db import get_db
from app.utils import hash_password, verify_password
from app.dependencies import create_access_token, get_current_user
from fastapi.responses import JSONResponse
import logging
import os

router = APIRouter()
logger = logging.getLogger(__name__)

def set_auth_cookie(response: Response, token: str):
    """
    Set the authentication cookie with environment-aware settings.
    """
    is_prod = os.getenv("ENV") == "production"

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=is_prod,
        domain=".syftingit.com" if is_prod else None,
        samesite="none" if is_prod else "lax",
        max_age=60 * 60 * 24,
        path="/"
    )

@router.post("/login")
def login(request: UserLogin, response: Response, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email).first()
    if not user or not verify_password(request.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": user.email})

    set_auth_cookie(response, token)

    return {"message": "Logged in successfully"}

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    # Check if user exists
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_pw = hash_password(user.password)

    new_user = User(first_name=user.first_name, last_name=user.last_name, email=user.email, password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully", "name": new_user.first_name, "email": new_user.email}

@router.get("/me")
def get_my_profile(current_user: User = Depends(get_current_user)):
    return {
        "first_name": current_user.first_name,
        "last_name": current_user.last_name,
        "email": current_user.email,
        "phone_number": current_user.phone_number,
        "address": current_user.address,
        "address2": current_user.address2,
        "state": current_user.state,
        "zip_code": current_user.zip_code,
    }

def delete_auth_cookies(response: JSONResponse):
    is_prod = os.getenv("ENV") == "production"

    cookie_args = {
        "httponly": True,
        "secure": is_prod,
        "domain": ".syftingit.com" if is_prod else None,
        "samesite": "none" if is_prod else "lax",
        "path": "/",
    }

    response.delete_cookie("access_token", **cookie_args)
    response.delete_cookie("refresh_token", **cookie_args)


@router.post("/logout")
def logout(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    db.query(RefreshToken).filter(RefreshToken.user_id == current_user.id).delete()
    db.commit()

    response = JSONResponse({"message": "Logged out successfully"})
    delete_auth_cookies(response)

    logger.info(f"User {current_user.id} logged out, cookies cleared")
    return response