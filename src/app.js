import express from "express";
import loggerMiddleware from "./middleware/logger.middleware.js";
import rateLimiterMiddleware from "./middleware/rateLimiter.middleware.js";
import healthRouter from "./routes/health.routes.js";
import apiKeyMiddleware from "./middleware/apiKey.middleware.js";
import metricsRouter from "./routes/metrics.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
const app = express();

app.use("/api/v1/metrics", metricsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(loggerMiddleware);
app.use(apiKeyMiddleware);
app.use(rateLimiterMiddleware);

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to LimitFlow API",
    version: "v1",
  });
});

app.use("/api/v1/health", healthRouter);

export default app;
