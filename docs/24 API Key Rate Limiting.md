# API Key-Based Rate Limiting

## Why use API keys?

IP addresses are shared by many users.

API keys uniquely identify each client.

## Request Flow

Client

↓

x-api-key

↓

Redis Key

↓

Rate Limiter

## Benefits

- Fair usage
- Works behind NAT
- Better for SaaS APIs
- Easier per-customer quotas
