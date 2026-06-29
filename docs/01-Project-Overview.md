# Lesson 0 – Project Planning

Date: 29 June 2026

---

# Project Name

**LimitFlow**

**Meaning:**

A backend service that controls the flow of incoming API requests by applying rate limits.

---

# Why am I building this project?

I already know how to build CRUD APIs using Node.js and Express.

I want to learn how real backend infrastructure works.

This project will help me understand:

- Backend architecture
- Middleware
- Rate Limiting
- Redis
- Docker
- Testing
- Logging
- System Design

---

# Problem Statement

Imagine an API without any restriction.

```
Client

↓

10000 Requests

↓

Server

↓

Server becomes slow or crashes
```

There should be a component that decides whether a request should be allowed or rejected.

That component is called a **Rate Limiter**.

---

# What is Rate Limiting?

**Definition**

Rate limiting is a technique used to control how many requests a client can send within a specific period of time.

Example:

```
Limit = 10 requests / minute

User sends

8 Requests

↓

Allowed

---------------

User sends

15 Requests

↓

Only first 10 are allowed.

Remaining requests receive

HTTP 429
```

---

# Why do websites use Rate Limiting?

- Prevent API abuse
- Prevent brute-force attacks
- Protect backend servers
- Reduce unnecessary load
- Ensure fair usage among users

---

# Where is Rate Limiting used?

- GitHub API
- Stripe API
- Google APIs
- Cloudflare
- AWS API Gateway
- Discord API

Almost every public API uses some form of rate limiting.

---

# Final Goal of LimitFlow

Build a production-ready rate limiting service using:

- Node.js
- Express
- Redis
- Docker
- Swagger
- Jest
- GitHub Actions

---

# Folder Structure

```
LimitFlow/

src/
docs/
tests/

server.js

package.json

README.md

.env
```

(Current structure only. More folders will be added later.)

---

# Packages Installed Today

Production Dependencies

- express
- dotenv

Development Dependency

- nodemon

---

# Why do we use nodemon?

Without nodemon:

```
Change code

↓

Stop Server

↓

Run node server.js
```

every single time.

With nodemon:

```
Save File

↓

nodemon detects change

↓

Automatically restarts server
```

---

# Why do we use .gitignore?

Ignore files that should not be pushed to GitHub.

Current entries:

```
node_modules/

.env

.DS_Store
```

Reason:

- node_modules can always be recreated using `npm install`.
- .env contains secret configuration values.
- .DS_Store is generated automatically by macOS.

---

# Why separate app.js and server.js?

app.js

- Creates Express app
- Registers middleware
- Registers routes

server.js

- Imports app.js
- Starts the server
- Calls app.listen()

This separation makes testing easier because test files can import the Express app without starting an actual server.

---

# Things I learned today

- A rate limiter sits between the client and the server.
- HTTP 429 means Too Many Requests.
- `npm start` executes the `start` script from package.json.
- `npm run dev` executes the `dev` script.
- nodemon automatically restarts the server when files change.
- `.env` should never be committed.
- `server.js` is the application's entry point.
- `app.js` contains the Express application.

---

# Questions to Revise

1. What is rate limiting?
2. Why is rate limiting important?
3. What is HTTP 429?
4. Why do we use nodemon?
5. Why do we ignore node_modules?
6. Why do we ignore .env?
7. Why separate app.js and server.js?
8. What is the difference between `npm start` and `npm run dev`?

---

# Doubts

(To be filled during future lessons.)

---

# Next Lesson

Build the first Express server and understand how Express works internally.
