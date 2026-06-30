# Service Layer

A Service contains the application's business logic.

It does not know anything about Express.

A service should not use:

- req
- res
- next

Instead, it returns data to the controller.

Flow

Route

↓

Controller

↓

Service

↓

Controller

↓

Response
