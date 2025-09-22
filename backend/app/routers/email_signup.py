import os
import requests
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models import EmailSignup
from app.schemas import EmailSignupCreate

router = APIRouter()

MAILCHIMP_API_KEY = os.getenv("MAILCHIMP_API_KEY")
MAILCHIMP_DC = os.getenv("MAILCHIMP_SERVER_PREFIX")
AUDIENCE_ID = os.getenv("MAILCHIMP_AUDIENCE_ID")
ENV = os.getenv("ENV", "local")  # default to local if not set

def push_to_mailchimp(email: str) -> bool:
    """Push a single email to Mailchimp. Returns True if successful or already exists."""
    url = f"https://{MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/{AUDIENCE_ID}/members"
    data = {"email_address": email, "status": "subscribed"}
    resp = requests.post(url, auth=("anystring", MAILCHIMP_API_KEY), json=data)
    if resp.status_code in [200, 204] or (resp.status_code == 400 and "Member Exists" in resp.text):
        return True
    print("Mailchimp error for", email, ":", resp.json())
    return False

@router.post("/email-signup")
def email_signup(payload: EmailSignupCreate, db: Session = Depends(get_db)):
    # Save to DB
    signup = EmailSignup(email=payload.email)
    db.add(signup)
    try:
        db.commit()
        db.refresh(signup)
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already exists")

    # Only push to Mailchimp in production
    if ENV == "prod":
        if push_to_mailchimp(payload.email):
            signup.synced_to_mailchimp = True
            db.commit()
    else:
        print(f"[Local] Email {payload.email} saved locally. Skipping Mailchimp.")

    return {"message": "Email signup saved"}

def sync_unsent_emails(db: Session):
    """Sync all unsynced emails to Mailchimp (only in prod)."""
    if ENV != "prod":
        print("[Local] Skipping sync of unsynced emails to Mailchimp.")
        return

    unsynced = db.query(EmailSignup).filter_by(synced_to_mailchimp=False).all()
    for signup in unsynced:
        if push_to_mailchimp(signup.email):
            signup.synced_to_mailchimp = True
    db.commit()
