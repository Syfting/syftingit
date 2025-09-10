# README

### Frontend:

**Using homebrew and yarn**

### Create virtual environment: (need to do only once)
`cd backend`

`python3 -m venv .venv`

### To Run
1. Open `syfting.code-workspace` to open frontend and backend in one window 
2. Open terminal and `cd frontend`
3. Run `yarn dev` to open on UI `http://localhost:5173/`
4. In new shell window, `cd backend`
5. Run db: `brew services start postgresql`
6. In new shell window, activate virtual environment: `source venv/bin/activate`
7. Run `uvicorn app.main:app --reload --port 8000`
