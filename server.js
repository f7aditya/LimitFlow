import dotenv from "dotenv";
import app from "./src/app.js";
import redisClient from "./src/config/redis.js";
import { initializeApp } from "./src/bootstrap.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await initializeApp();
    console.log("Redis is connected");

    app.listen(PORT, () => {
      console.log(`🚀 LimitFlow is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect Redis");

    console.error(error);

    process.exit(1);
  }
};

startServer();
