import request from "supertest";
import app from "../src/app.js";
import { initializeApp } from "../src/bootstrap.js";
import redisClient from "../src/config/redis.js";

beforeAll(async () => {
  await initializeApp();
});

afterAll(async () => {
  if (redisClient.isOpen) {
    await redisClient.quit();
  }
});

describe("Health API", () => {
  test("should return 401 when API key is missing", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.statusCode).toBe(401);
    expect(response.body).toEqual({
      success: false,
      message: "API key is required.",
    });
  });

  test("should return 200 when API key is valid", async () => {
    const response = await request(app)
      .get("/api/v1/health")
      .set("x-api-key", "user-1");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
