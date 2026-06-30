# Controllers

A controller handles an incoming HTTP request and prepares the HTTP response.

Responsibilities:

- Receive req and res.
- Call services if needed.
- Send the response.

Controllers should contain minimal business logic.

Request Flow

Client

↓

Route

↓

Controller

↓

Response
