# Rate Limiting Algorithms

## Fixed Window

Counts requests in a fixed-duration time window.

Advantages:

- Simple
- Fast
- Low memory

Disadvantages:

- Boundary burst problem

---

## Sliding Window

Counts requests made during the last rolling time window.

Advantages:

- More accurate
- Reduces burst traffic

Disadvantages:

- More complex
- Requires storing additional timing information

---

## Token Bucket

Requests consume tokens.

Tokens are replenished over time.

Advantages:

- Allows controlled bursts
- Common in production systems

---

## Leaky Bucket

Processes requests at a constant rate.

Advantages:

- Smooth traffic
- Predictable processing rate
