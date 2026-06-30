# Health Check Endpoint

## What is a Health Check Endpoint?

A Health Check Endpoint is used to verify whether the backend service is running correctly.

It is commonly used by:

- Load Balancers
- Docker
- Kubernetes
- Monitoring Tools

Endpoint

GET /health

Response

{
"success": true,
"status": "UP",
"service": "LimitFlow"
}

---

## Why status code 200?

HTTP 200 indicates that the request was successfully processed.

---

## Method Chaining

Example

res.status(200).json(...)

status() returns the response object, allowing json() to be called immediately.
