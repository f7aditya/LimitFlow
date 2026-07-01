# In-Memory Rate Limiter (Part 1)

## Goal

Create the foundation of the rate limiter using an in-memory `Map`.

## Constants

```javascript
const WINDOW_SIZE = 60 * 1000;
const MAX_REQUESTS = 5;
```

Using named constants avoids magic numbers and makes configuration easier.

## Request Store

```javascript
const requestStore = new Map();
```

Each key is the client's IP address.

Each value stores:

- `count`
- `startTime`

## New Client Flow

1. Read the client's IP using `req.ip`.
2. Check whether the IP exists in the `Map`.
3. If not, create a new entry with:
   - `count = 1`
   - `startTime = Date.now()`
4. Call `next()` to allow the request.
