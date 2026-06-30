import express from "express";
import healthRouter from "./routes/health.routes.js";
const app = express();

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to LimitFlow API",
    version: "v1",
  });
});

app.use("/api/v1/health", healthRouter);

export default app;
