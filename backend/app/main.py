from fastapi import FastAPI, HTTPException, Depends, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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
    allow_headers=["*"],
)

@app.post("/register")
async def register(email: str = Form(...), password: str = Form(...)):
    # Later: Add database write
    return {"message": "User created successfully"}

@app.post("/login")
async def login(email: str = Form(...), password: str = Form(...)):
    # Later: Check DB
    if email == "test@example.com" and password == "test":
        return {"access_token": "fake-jwt-token", "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/health")
def health():
    return {"status": "ok"}
