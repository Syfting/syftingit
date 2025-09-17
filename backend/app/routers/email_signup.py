from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.db import get_db
from app.models import EmailSignup 

router = APIRouter()

class EmailSignupRequest(BaseModel):
    email: EmailStr

@router.post("/email-signup")
def email_signup(
    signup: EmailSignupRequest,
    db: Session = Depends(get_db)
):
    try:
        new_signup = EmailSignup(email=signup.email, created_at=datetime.utcnow())
        db.add(new_signup)
        db.commit()
        db.refresh(new_signup)
        return {"message": "Successfully signed up!"}
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already signed up")
