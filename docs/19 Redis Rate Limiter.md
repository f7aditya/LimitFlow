# Redis Rate Limiter

## Flow

1. Read the current count using `GET`.
2. If the key does not exist:
   - Create it with value `1`.
   - Set a TTL using `EX`.
3. Otherwise:
   - Increment the counter using `INCR`.
4. If the counter exceeds the limit:
   - Return HTTP 429.
5. Otherwise:
   - Continue the request.

## Advantages

- Shared across servers.
- Automatic expiration.
- Atomic counter updates.
- Simpler than the in-memory implementation.
