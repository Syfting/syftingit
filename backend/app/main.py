from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import Base, engine
from .routers import auth

# ---------------- FastAPI app ----------------
app = FastAPI(title="Syfting backend")
app.include_router(auth.router, prefix="/auth")

# ---------------- CORS config ----------------
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
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

# ---------------- Include routers ----------------
app.include_router(auth.router)
