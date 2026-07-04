# API Key Authentication Middleware

## Purpose

Authenticate incoming requests using the x-api-key header before they reach the rate limiter.

## Responsibilities

- Read the x-api-key header.
- Reject requests without an API key.
- Store the API key on req.apiKey.
- Call next() for valid requests.

## Benefits

- Separation of authentication and rate limiting.
- Reusable middleware.
- Easier to extend with database validation in the future.
