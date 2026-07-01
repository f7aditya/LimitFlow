# Designing the Rate Limiter

## Data Structure

LimitFlow will use a JavaScript `Map` to store request information.

Each client is identified by its IP address.

Example:

```javascript
requestStore.set("192.168.1.10", {
  count: 5,
  startTime: Date.now(),
});
```

## Why store `startTime`?

A rate limiter needs to know when the current time window began so it can decide whether to reset the counter.

## High-Level Algorithm

1. Identify the client.
2. Check if the client already exists.
3. If not, create a new entry.
4. If the time window has expired, reset the counter.
5. Otherwise, increment the counter.
6. If the limit is exceeded, return HTTP 429.
7. Otherwise, allow the request.
