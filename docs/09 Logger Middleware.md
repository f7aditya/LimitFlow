## Registering Middleware

```javascript
app.use(loggerMiddleware);
```

Registers the middleware globally.

Every incoming request passes through it before reaching the route handlers.

---

## Middleware Flow

Client

↓

Middleware

↓

Route

↓

Controller

↓

Service

↓

Response

---

## Why is next() important?

A middleware must either:

- Send a response

OR

- Call next()

If it does neither, the request remains pending.
