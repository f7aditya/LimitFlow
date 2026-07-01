# What is Rate Limiting?

Rate Limiting is the process of restricting how many requests a client can make during a specified time period.

Example:

5 requests per minute

If a client exceeds the limit, the server responds with:

HTTP 429 Too Many Requests

---

## Why is Rate Limiting important?

- Prevents abuse
- Protects servers
- Reduces brute-force attacks
- Prevents API misuse
- Ensures fair resource usage

---

## Where is Rate Limiting implemented?

Rate Limiting is typically implemented as middleware.

Flow:

Client

↓

Logger

↓

Rate Limiter

↓

Route

↓

Controller

↓

Service
