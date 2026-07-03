# Connecting to Redis

## Environment Variable

```env
REDIS_URL=redis://localhost:6379
```

Never hardcode connection URLs.

---

## Startup Flow

1. Load environment variables.
2. Create Redis client.
3. Connect to Redis.
4. Start the Express server.

---

## Why connect before starting Express?

The application depends on Redis.

If Redis is unavailable, the server should fail to start instead of accepting requests it cannot process.

This is known as the **Fail Fast** principle.
