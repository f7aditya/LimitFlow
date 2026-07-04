# API Key Validation

## Purpose

Only allow requests from known API keys.

## Current Implementation

Uses an in-memory JavaScript Set for fast lookups.

## Future Improvements

- Store API keys in a database.
- Support expiration.
- Support revocation.
- Associate API keys with users or organizations.
