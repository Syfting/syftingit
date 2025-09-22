from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import Base, engine
from .routers import auth, email_signup, account

# ---------------- FastAPI app ----------------
app = FastAPI(title="Syfting backend")
app.include_router(auth.router, prefix="/auth")
app.include_router(email_signup.router, tags=["newsletter"])
app.include_router(account.router, prefix="/api/account", tags=["account"])

# ---------------- CORS config ----------------
origins = [
    "http://localhost:5173",
    "https://syftingit.vercel.app",
    "https://www.syftingit.com",
    "https://syftingit.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# ---------------- Create tables automatically ----------------
Base.metadata.create_all(bind=engine)

@app.get("/db-check")
def db_check():
    return {"database_url": os.getenv("DATABASE_URL")}
