import { createClient } from "redis";
const redisClient = createClient({
  url: process.env.REDIS_URL,
});
redisClient.on("connect", () => {
  console.log("🟡 Connecting to Redis...");
});

redisClient.on("ready", () => {
  console.log("🟢 Redis is ready.");
});

redisClient.on("error", (error) => {
  console.error("🔴 Redis Error:", error.message);
});
export default redisClient;
