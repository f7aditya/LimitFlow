import { Router } from "express";
import metrics from "../config/metrics.js";

const metricsRouter = Router();
metricsRouter.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    metrics,
  });
});

export default metricsRouter;
