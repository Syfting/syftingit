from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models import User
from app.schemas import UserUpdate
from app.dependencies import get_current_user

router = APIRouter()

@router.post("/update")
def update_account(
    data: UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    try:
        # Update user fields
        for key, value in data.dict().items():
            setattr(current_user, key, value)

        db.add(current_user)
        db.commit()
        db.refresh(current_user)

        return {"message": "Account updated successfully!", "user": current_user}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
