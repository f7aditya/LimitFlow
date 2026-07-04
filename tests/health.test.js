import request from "supertest";
import app from "../src/app.js";

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

  test("should return 401 for an invalid API key", async () => {
    const response = await request(app)
      .get("/api/v1/health")
      .set("x-api-key", "invalid-user");

    expect(response.statusCode).toBe(401);

    expect(response.body.success).toBe(false);

    expect(response.body.message).toBe("Invalid API key.");
  });
});
