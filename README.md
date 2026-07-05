# 🚀 LimitFlow

A production-ready Redis-powered Fixed Window Rate Limiter built with Node.js and Express.js.

LimitFlow demonstrates how modern backend services implement API rate limiting, authentication, testing, containerization, CI/CD, and developer tooling using industry-standard practices.

---

# ✨ Features

- 🚦 Redis Fixed Window Rate Limiting
- 🔑 API Key Authentication
- 📊 Metrics Endpoint
- 📖 Swagger/OpenAPI Documentation
- 🧪 Jest + Supertest Integration Tests
- 🐳 Docker & Docker Compose Support
- ⚙️ GitHub Actions CI Pipeline
- 📝 ESLint + Prettier
- 🪝 Husky + lint-staged
- 🔒 Production-ready Docker Image

---

# 🛠 Tech Stack

| Category         | Technology             |
| ---------------- | ---------------------- |
| Runtime          | Node.js                |
| Framework        | Express.js             |
| Cache            | Redis                  |
| Testing          | Jest, Supertest        |
| API Docs         | Swagger                |
| Containerization | Docker, Docker Compose |
| CI/CD            | GitHub Actions         |
| Code Quality     | ESLint, Prettier       |
| Git Hooks        | Husky, lint-staged     |

---

# 📁 Project Structure

```text
LimitFlow
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── utils
│   └── bootstrap.js
│
├── tests
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/LimitFlow.git

cd LimitFlow
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
PORT=3000

REDIS_URL=redis://localhost:6379

WINDOW_LIMIT_SIZE=60

WINDOW_MAX_REQUESTS=5
```

---

## Run Application

```bash
npm start
```

---

# 🐳 Run using Docker

```bash
docker compose up --build
```

---

# 🧪 Run Tests

```bash
npm test
```

---

# 🔍 Lint

```bash
npm run lint
```

---

# 🎨 Format Code

```bash
npm run format
```

---

# 📖 Swagger Documentation

After starting the server:

```
http://localhost:3000/api-docs
```

---

# 📊 API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | /api/v1/health  | Health Check         |
| GET    | /api/v1/metrics | Rate Limiter Metrics |

---

# 🏗 Architecture

```
Client
   │
   ▼
Express Server
   │
   ├──────────────► API Key Middleware
   │
   ├──────────────► Rate Limiter Middleware
   │
   ├──────────────► Logger Middleware
   │
   ▼
Controllers
   │
   ▼
Redis
```

---

# 📦 Docker

- Multi-stage Docker Build
- Production Dependencies Only
- Non-root User
- Docker Compose Support

---

# ✅ CI/CD

GitHub Actions automatically performs:

- Install Dependencies
- ESLint
- Jest Tests

on every push to the main branch.

---

# 👨‍💻 Author

**Aditya Verma**

GitHub:
https://github.com/f7aditya
