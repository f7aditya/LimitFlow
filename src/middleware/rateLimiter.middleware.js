import redisClient from "../config/redis.js";
const WINDOW_SIZE = 60 * 1000;
const MAX_REQUESTS = 5;

const rateLimiterMiddleware = async (req, res, next) => {
  const clientIP = req.ip;
  const redisKey = `rate_limit:${clientIP}`;

  const wasKeyCreated = await redisClient.set(redisKey, 1, {
    EX: WINDOW_SIZE,
    NX: true,
  });

  if (wasKeyCreated === "OK") {
    return next();
  }

  const updatedCount = await redisClient.incr(redisKey);

  if (updatedCount > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: "Rate limit exceeded. Please try again later.",
    });
  }

  return next();

  // without redis, using in-memory node.js

  // const clientData = requestStore.get(clientIP);
  // if (!clientData) {
  //   requestStore.set(clientIP, {
  //     count: 1,
  //     startTime: Date.now(),
  //   });
  //   return next();
  // }

  // const currentTime = Date.now();

  // const elapsedTime = currentTime - clientData.startTime;

  // if (elapsedTime > WINDOW_SIZE) {
  //   requestStore.set(clientIP, {
  //     count: 1,
  //     startTime: currentTime,
  //   });

  //   return next();
  // }

  // clientData.count++;
  // if (clientData.count > MAX_REQUESTS) {
  //   return res.status(429).json({
  //     success: false,
  //     message: "Rate limit exceeded. Please try again later.",
  //   });
  // }

  // return next();
};

export default rateLimiterMiddleware;
