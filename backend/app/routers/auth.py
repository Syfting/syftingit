from fastapi import APIRouter, HTTPException, Depends, Response
from sqlalchemy.orm import Session
from app.models import User
from app.schemas import UserCreate, UserLogin
from app.db import get_db
from app.utils import hash_password, verify_password
from app.dependencies import create_access_token, get_current_user

router = APIRouter()

# @router.get("/login")
# def login():
#     return {"message": "This is the login route"}

# @router.post("/login")
# def login(user: UserLogin, db: Session = Depends(get_db)):
#     db_user = db.query(User).filter(User.email == user.email).first()
#     if not db_user or not verify_password(user.password, db_user.password):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     return {"message": f"Welcome back, {db_user.first_name}!", "email": db_user.email}

@router.post("/login")
def login(request: UserLogin, response: Response, db: Session = Depends(get_db)):
    # Find user
    user = db.query(User).filter(User.email == request.email).first()
    if not user or not verify_password(request.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Generate token
    token = create_access_token({"sub": user.email})

    # Set HttpOnly cookie
    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=False,   # ⚠️ set True in production
        samesite="lax",
        max_age=60 * 60 * 24
    )

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
        "email": current_user.phone_number,
        "email": current_user.address,
        "email": current_user.email,
        "email": current_user.email,
        "email": current_user.email,
    }