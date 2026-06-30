# Environment Variables

Environment Variables store configuration outside the source code.

Examples

PORT=3000

NODE_ENV=development

REDIS_URL=redis://localhost:6379

---

## Why use Environment Variables?

- Avoid hardcoding configuration.
- Different values for development, staging, and production.
- Improve security for secrets and credentials.

---

## dotenv

```javascript
import dotenv from "dotenv";

dotenv.config();
```

Loads variables from the `.env` file into `process.env`.

---

## Accessing Variables

```javascript
const PORT = process.env.PORT || 3000;
```

Uses the environment value if available; otherwise falls back to `3000`.
