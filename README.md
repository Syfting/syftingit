README

Setup:

VS Code Extensions to install:
Python
Pylance
Prettier
ES Lint
Tailwind CSS IntelliSense
Docker

Versions used:
npm 10.1.0
npx 10.1.0

*if having difficulty with package management, use homebrew and yarn*

Backend Dependencies to install:
Python
Pip
FastAPI
flyctl

Create virtual environment:
Navigate to backend folder
Create: python3 -m venv .venv

TO RUN:
Open syfting.code-workspace to open frontend and backend in one window 
To run frontend open terminal, run “yarn dev” >  http://localhost:5173/
In a new shell window, cd to backend folder and activate venv: source .venv/bin/activate 
cd to app folder (where main.py is located) and run this command to run backend: uvicorn main:app --reload --port 8000
