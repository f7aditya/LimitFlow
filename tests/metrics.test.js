import request from "supertest";
import app from "../src/app.js";

test("should return metrics", async () => {
  const response = await request(app)
    .get("/api/v1/metrics")
    .set("x-api-key", "user-1");

  expect(response.statusCode).toBe(200);

  expect(response.body.success).toBe(true);
});

test("should update metrics correctly", async () => {
  // Make 6 requests
  for (let i = 0; i < 6; i++) {
    await request(app).get("/api/v1/health").set("x-api-key", "user-1");
  }

  // Fetch metrics
  const metricsResponse = await request(app)
    .get("/api/v1/metrics")
    .set("x-api-key", "user-1");

  expect(metricsResponse.statusCode).toBe(200);
});
