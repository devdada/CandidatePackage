AI Usage Log
This document explains how I used AI tools to develop the OpenID Connect service for this assessment.

# Tools Used

ChatGPT
Used for generating starter backend Express routes, solving JWT signing problems, helping fix LocalStack volume conflicts, troubleshooting crypto polyfills in Vite/React, and drafting README sections.

GitLens (VS Code Extension)
For checking commit history and staging changes properly.

npm and Node.js
Tested different Node versions to resolve Vite ESM and crypto issues.

# Prompts and Iterations

## LocalStack Volume Conflict

Prompt:
“LocalStack fails with OSError: [Errno 16] Device or resource busy when clearing /tmp/localstack.”

Result:
Removed the /tmp/localstack bind mount from docker-compose.yml. Added a comment explaining this prevents volume conflicts during local runs.

## JWT Secret Not Defined

Prompt:
“Why does my Express /auth/token route throw secretOrPrivateKey must have a value?”

Result:
Used ChatGPT for a corrected auth.ts example using dotenv.config(). Ensured dotenv loads first in index.ts so environment variables are available before routes run. Tested with curl to confirm token generation works.

## Vite Crypto Polyfill Issue

Prompt:
“Vite dev server fails with crypto.hash is not a function. How can I fix this in Vite v7?”

Result:
Tried different Node polyfill plugins based on AI suggestions. Manually resolved version conflicts by matching plugin versions with Vite 7. Confirmed the React app compiles and successfully calls the backend.

# Manual Fixes and Adjustments

Verified .env loads from the project root instead of backend/.

Adjusted import order in index.ts so environment variables are available for routes.

Added stub routes for /authorize and /userinfo to show OpenID Connect spec coverage.

Ran curl and browser tests to confirm token flow works.

# Trade-offs and Gaps

Full OpenID Connect features (PKCE, CSRF, consent screen) are marked as TODOs.

Secrets are handled with .env (not committed). In production, they should be in a secure store.

Documented partial implementations and security notes in the README.

# Summary

AI tools sped up setup, boilerplate generation, and problem-solving for version conflicts. Key areas like environment handling, testing, and crypto polyfills required manual research and testing to complete the flow successfully.
