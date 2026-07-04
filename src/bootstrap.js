import redisClient from "./config/redis.js";

export const initializeApp = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("Redis connected");
  }
};
