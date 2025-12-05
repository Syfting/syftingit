from datetime import datetime
from pydantic import BaseModel, EmailStr, model_validator
from typing import Optional

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: Optional[str] = None
    address: Optional[str] = None
    address2: Optional[str] = None
    state: Optional[str] = None
    zip_code: Optional[str] = None

class EmailSignupCreate(BaseModel):
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    role: Optional[str] = None

class StorefrontCreate(BaseModel):
    bio: str
    delivery: bool
    pickup: bool
    delivery_range: Optional[int] = 0
    pickup_address: str
    pickup_address_2: Optional[str] = ""
    state: str
    zip_code: str
    same_as_user_address: bool = False

class StorefrontOut(BaseModel):
    id: int
    user_id: int
    bio: Optional[str]
    delivery: Optional[bool]
    pickup: Optional[bool]
    delivery_range: Optional[int]
    pickup_address: Optional[str]
    pickup_address_2: Optional[str]
    state: Optional[str]
    zip_code: Optional[str]
    same_as_user_address: Optional[bool]

    created_at: datetime
    updated_at: datetime

    @model_validator(mode="after")
    def check_delivery_or_pickup(cls, values):
        if not values.delivery and not values.pickup:
            raise ValueError("At least one of 'pickup' or 'delivery' must be provided")
        return values

    class Config:
        from_attributes = True

class StorefrontUpdate(BaseModel):
    bio: Optional[str]
    delivery: Optional[bool]
    pickup: Optional[bool]
    delivery_range: Optional[int]
    pickup_address: Optional[str]
    pickup_address_2: Optional[str]
    state: Optional[str]
    zip_code: Optional[str]
    same_as_user_address: Optional[bool]