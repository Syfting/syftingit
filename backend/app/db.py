import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

ENV = os.getenv("ENV", "LOCAL").upper()  # default to LOCAL if ENV not set

if ENV == "PROD":
    load_dotenv(".env.prod")
    print("Loaded PROD environment variables")
else:
    load_dotenv(".env.local")
    print("Loaded LOCAL environment variables")

# DATABASE_URL must come from environment
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
if not SQLALCHEMY_DATABASE_URL:
    raise ValueError(
        "DATABASE_URL environment variable is not set. "
        "Create a .env file for local development or set it in production."
    )

engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
