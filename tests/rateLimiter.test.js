import request from "supertest";
import app from "../src/app.js";

describe("Rate Limiter", () => {
  test("should allow first five requests", async () => {
    for (let i = 0; i < 5; i++) {
      const response = await request(app)
        .get("/api/v1/health")
        .set("x-api-key", "user-1");

      expect(response.statusCode).toBe(200);

      expect(response.headers["x-ratelimit-remaining"]).toBe(String(4 - i));
    }

    const response = await request(app)
      .get("/api/v1/health")
      .set("x-api-key", "user-1");

    expect(response.statusCode).toBe(429);

    expect(response.headers["x-ratelimit-limit"]).toBe("5");

    expect(response.headers["retry-after"]).toBeDefined();

    expect(response.body.success).toBe(false);

    expect(response.body.message).toBe(
      "Rate limit exceeded. Please try again later.",
    );
  });
});
