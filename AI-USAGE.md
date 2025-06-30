# AI Usage Log

This document tracks how I used AI tools (ChatGPT, Copilot) to build my OpenID Connect service.

---

## Tools Used

- **ChatGPT**: Prompting and refinement of backend and frontend scaffolding, Docker Compose adjustments, LocalStack troubleshooting, Terraform structure ideas, and Vite + React crypto polyfill fixes.
- **GitLens**: For commit history and Git integration in VS Code.

## Prompts & Iterations

### 1️⃣ LocalStack Volume Conflict

**Prompt:**

> “I’m getting `Device or resource busy` when LocalStack tries to clear `/tmp/localstack`. How do I fix this?”

**Outcome:**

- Removed conflicting volume mount, confirmed Docker works.
- Added comment to `docker-compose.yml` explaining fix.

---

### 2️⃣ JWT Secret Not Defined

**Prompt:**

> “Why does my Express route return `secretOrPrivateKey must have a value`?”

**Outcome:**

- Used `.env` and `dotenv.config()`.
- Verified correct load order.
- Prompted ChatGPT for final `auth.ts` example.

---

## Manual Interventions

- Manually adjusted `index.ts` import/export structure.
- Verified environment variables load before route handlers.

---

## Next Steps

- Document partial implementations as TODOs.
- Include clear security notes for production gaps (e.g., PKCE, CSRF, rate limiting).
