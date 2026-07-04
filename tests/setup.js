import { beforeAll, beforeEach, afterAll } from "@jest/globals";
import { initializeApp } from "../src/bootstrap.js";
import redisClient from "../src/config/redis.js";

beforeAll(async () => {
  await initializeApp();
});

beforeEach(async () => {
  await redisClient.flushDb();
});

afterAll(async () => {
  if (redisClient.isOpen) {
    await redisClient.quit();
  }
});
