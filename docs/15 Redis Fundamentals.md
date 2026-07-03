# Why Redis?

The in-memory `Map` implementation works only within a single Node.js process.

Problems:

- Data is lost when the server restarts.
- Multiple server instances cannot share request counts.

Redis solves these problems by providing a shared, in-memory key-value store.

## Advantages

- Very fast
- Shared across servers
- Supports key expiration (TTL)
- Supports atomic operations

## Common Use Cases

- Caching
- Session storage
- Rate limiting
- Queues
- Real-time counters
