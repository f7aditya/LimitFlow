# Metrics Endpoint

## Purpose

Expose basic operational statistics for the rate limiter.

## Current Metrics

- Total requests
- Allowed requests
- Blocked requests

## Current Storage

In-memory JavaScript object.

## Future Improvement

Move metrics to Redis for persistence and multi-instance support.
