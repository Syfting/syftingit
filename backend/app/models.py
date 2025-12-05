from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey, Boolean
from app.db import Base
from datetime import datetime
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(255), nullable=False)
    last_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)
    phone_number = Column(String(20), nullable=True)
    address = Column(String(255), nullable=True)
    address2 = Column(String(255), nullable=True)
    state = Column(String(100), nullable=True)
    zip_code = Column(String(20), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    refresh_tokens = relationship(
        "RefreshToken",
        back_populates="user",
        cascade="all, delete-orphan"
    )

class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"))
    token = Column(String, unique=True, index=True, nullable=False)
    expires_at = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="refresh_tokens")

class EmailSignup(Base):
    __tablename__ = "email_signups"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    role = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    synced_to_mailchimp = Column(Boolean, default=False, nullable=False)

class Storefront(Base):
    __tablename__ = "storefronts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True)
    bio = Column(String, nullable=False)
    delivery = Column(Boolean, default=False, nullable=False)
    pickup = Column(Boolean, default=False, nullable=False)
    delivery_range = Column(Integer, default=0)
    pickup_address = Column(String, nullable=False)
    pickup_address_2 = Column(String, default="")
    state = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)
    same_as_user_address = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    user = relationship("User", backref="storefront")