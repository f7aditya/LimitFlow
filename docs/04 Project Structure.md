# Professional Express Project Structure

routes/
Responsible for mapping endpoints to controllers.

controllers/
Handles HTTP requests and responses.

services/
Contains business logic.

middleware/
Runs before the controller.
Used for logging, authentication and rate limiting.

config/
Application configuration.

utils/
Reusable helper functions.

---

Request Flow

Client

↓

Route

↓

Controller

↓

Service

↓

Response
