# Redis Client

## createClient()

```javascript
import { createClient } from "redis";

const redisClient = createClient();
```

Creates a Redis client object.

It does **not** establish a connection.

---

## Events

### connect

Emitted when the client starts connecting.

### ready

Emitted when the client is ready to execute commands.

### error

Emitted when a connection or command error occurs.

---

## Why export the client?

A single shared Redis client avoids creating multiple unnecessary connections.
