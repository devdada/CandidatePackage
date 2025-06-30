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

Node.js + Express + TypeScript
Easy to build APIs quickly with strong typing and lots of community examples.

React + Vite
Simple setup for building a fast UI with minimal config.

Terraform + LocalStack
Allows testing cloud resources locally and keeps infrastructure repeatable.

dotenv + JWT
Secure secrets and standard token handling for auth.

ESLint + Jest
Basic linting and testing to keep the code clean and maintainable.

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

# TODO's

# OpenID Connect Core

Implement full Authorization Code Flow with PKCE, state, and nonce.

Add user consent screen for OAuth flow.

Store and validate authorization codes.

Issue proper ID tokens with real user claims.

Add refresh token support.

# User Management

Add secure user registration with hashed passwords (bcrypt/argon2).

Implement profile management endpoints.

Validate all user inputs to prevent injection attacks.

# Security

Add rate limiting to prevent brute-force attacks.

Enforce HTTPS in production.

Implement CSRF protection middleware.

Sanitize and validate all input.

Rotate JWKS keys and expose real JWKS at /jwks.json.

Use Helmet to set secure HTTP headers.

Add Content Security Policy (CSP) headers.

# Infrastructure as Code

Add Terraform definitions for:

DynamoDB user store

Secrets Manager for JWT secrets

S3 buckets for assets or logs

Logging and monitoring (e.g., CloudWatch)

Proper IAM roles for services

Add LocalStack configuration to simulate these resources.

# Frontend

Implement full login/logout flow with PKCE on client side.

Build responsive OAuth consent screen.

Add secure token handling (e.g., HttpOnly cookies).

Implement user registration and profile update forms.

# Testing

Add unit tests for key routes (auth, token, userinfo).

Add integration tests for complete OIDC flows.

Document security test coverage.

# Documentation & Deployment

Include architecture diagram showing all components.

Document production deployment steps and environment hardening.

Record a short demo video walkthrough.

Add SECURITY.md with known risks and mitigations.
