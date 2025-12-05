from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional

from app.db import get_db
from app.models import Storefront, User
from app.routers.auth import get_current_user
from app.schemas import StorefrontCreate, StorefrontUpdate, StorefrontOut

router = APIRouter()


def get_user_storefront(db: Session, user_id: int) -> Optional[Storefront]:
    return db.query(Storefront).filter_by(user_id=user_id).first()


@router.post("", response_model=StorefrontOut)
def create_storefront(
    data: StorefrontCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = get_user_storefront(db, current_user.id)
    if existing:
        raise HTTPException(400, "Storefront already exists")

    storefront = Storefront(**data.dict(), user_id=current_user.id)
    db.add(storefront)
    db.commit()
    db.refresh(storefront)
    return storefront


@router.get("", response_model=StorefrontOut)
def get_storefront(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    storefront = get_user_storefront(db, current_user.id)
    if not storefront:
        raise HTTPException(status_code=404, detail="Storefront not found")
    return storefront


@router.put("", response_model=StorefrontOut)
def update_storefront(
    data: StorefrontUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    storefront = get_user_storefront(db, current_user.id)
    if not storefront:
        raise HTTPException(404, "No storefront to update")

    for key, value in data.dict(exclude_unset=True).items():
        setattr(storefront, key, value)

    db.commit()
    db.refresh(storefront)
    return storefront