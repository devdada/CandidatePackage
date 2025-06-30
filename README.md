OpenID Connect Service — CandidatePackage
This project is a basic OpenID Connect (OIDC) service using AI-driven development practices.
It includes a backend API, a simple React frontend, and infrastructure setup for LocalStack.

# Features

# Core Components

Backend: Express API with /auth/authorize and /auth/token endpoints.

Frontend: Vite + React client to request tokens.

Infrastructure: Docker Compose for LocalStack, Terraform placeholders.

# Security

JWT secrets loaded from .env

Secrets are not committed

Example secret: JWT_SECRET

# Tech Stack

Node.js, Express, TypeScript

Vite, React

LocalStack, Terraform

# Quickstart

Clone the repo
git clone <repo-url>
cd CandidatePackage

Install backend dependencies
cd backend
npm install

Install frontend dependencies
cd ../frontend
npm install

Start LocalStack containers
docker-compose up

Start backend
cd backend
npm run dev

Start frontend
cd frontend
npm run dev

Visit frontend in browser:
http://localhost:5173

# Environment

Create a .env file inside the backend folder:

ini
Copy
Edit
PORT=4000
JWT_SECRET=supersecretkey123
Run docker-compose up to start LocalStack.

# How to Test

Use Postman or curl:
curl -X POST http://localhost:4000/auth/token

Use the React page:

Click the Get Token button

See the token in the console or UI

# Project Structure

pgsql
Copy
Edit
CandidatePackage/
├── backend/ Express server
├── frontend/ React app
├── infra/ Terraform and IaC
├── docker-compose.yml
├── AI-USAGE.md
└── README.md

# AI Usage

See AI-USAGE.md for details:

Prompts

Iterations

# TODO

Implement full OIDC spec: AuthCode flow, UserInfo, JWKS endpoints

Terraform: DynamoDB user store, Secrets Manager, S3

Session and client app management

Tests and security improvements
