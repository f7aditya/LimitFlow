/**
 * @swagger
 * /api/v1/metrics:
 *   get:
 *     summary: Rate Limiter Metrics
 *     tags:
 *       - Metrics
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Metrics retrieved successfully.
 *       401:
 *         description: API key missing or invalid.
 */

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
