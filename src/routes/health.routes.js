/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health Check Endpoint
 *     tags:
 *       - Health
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: API is healthy.
 *       401:
 *         description: API key missing or invalid.
 *       429:
 *         description: Rate limit exceeded.
 */

import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";
const healthRouter = Router();
healthRouter.get("/", getHealth);

export default healthRouter;
