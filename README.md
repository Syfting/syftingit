# README

### VS Code Extensions to install:
- Python
- Pylance
- Prettier
- ES Lint
- Tailwind CSS IntelliSense
- Docker

**If you are having difficulty with package management, use homebrew and yarn**

### Backend Dependencies to install:
- Python
- Pip
- FastAPI
- flyctl

### Create virtual environment:
`cd backend`

`python3 -m venv .venv`

### To Run
1. Open `syfting.code-workspace` to open frontend and backend in one window 
2. Open terminal and `cd frontend`
3. Run `yarn dev` to open on UI `http://localhost:5173/`
4. In new shell window, `cd backend`
5. Activate virtual environment: `source .venv/bin/activate`
6. `cd app` and run `uvicorn main:app --reload --port 8000`
