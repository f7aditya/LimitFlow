# In-Memory Rate Limiter (Part 2)

## Existing Client Flow

1. Read the current time.
2. Calculate the elapsed time.
3. If the time window has expired:
   - Reset `count` to `1`
   - Reset `startTime`
4. Otherwise:
   - Increment `count`
5. If `count > MAX_REQUESTS`:
   - Return HTTP 429
6. Otherwise:
   - Call `next()`

## Why `count > MAX_REQUESTS`?

If the limit is 5:

Requests 1–5 are allowed.

The 6th request is rejected.

Therefore the comparison should be `>` instead of `>=`.
