AI Usage Log
This document explains how I used AI tools to develop the OpenID Connect service for this assessment.

# Tools Used

ChatGPT

Used for generating starter backend Express routes, fixing JWT signing errors, helping with LocalStack volume conflicts, solving Vite crypto polyfill issues, and drafting README sections.

GitLens (VS Code Extension)

Used for commit history, staging, and clean version control.

npm & Node.js

Switched Node versions and polyfill plugins to resolve Vite ESM and crypto-related build errors.

# Prompts and Iterations

LocalStack Volume Conflict
Prompt:

“LocalStack fails with OSError: [Errno 16] Device or resource busy when clearing /tmp/localstack.”

Result:
Removed the /tmp/localstack bind mount from docker-compose.yml. Added a comment to explain this avoids volume conflicts during local development.

JWT Secret Not Defined
Prompt:

“Why does my Express /auth/token route throw secretOrPrivateKey must have a value?”

Result:
Used ChatGPT to generate an updated auth.ts with dotenv.config(). Verified environment variables load before routes run by adjusting import order in index.ts. Tested with curl to confirm token generation works.

Vite Crypto Polyfill Issue
Prompt:

“Vite dev server fails with crypto.hash is not a function. How do I fix this in Vite v7?”

Result:
Tested multiple Node polyfill plugins per AI suggestions. Manually resolved version conflicts by matching plugin versions with Vite 7. Confirmed the React app builds and can call the backend successfully.

# Manual Fixes and Adjustments

Verified .env loads from the project root instead of backend only.

Adjusted import order in index.ts to ensure env vars load before route handlers run.

Added placeholder routes for /authorize and /userinfo for spec coverage.

Tested endpoints with curl and the React client to confirm the basic flow works.

# Trade-offs and Gaps

Full OpenID Connect features (PKCE, CSRF, consent screen) are marked as TODOs.

Secrets are handled via .env only for local dev. Production should use secure storage.

Documented partial implementations and security notes in the README.

# Summary

AI tools sped up setup, scaffolding, and version troubleshooting. Some areas like environment handling, JWT signing, and Vite polyfills required manual tweaks and testing to ensure everything ran smoothly in LocalStack.
