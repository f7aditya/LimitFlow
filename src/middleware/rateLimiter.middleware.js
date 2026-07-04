import "dotenv/config";
import redisClient from "../config/redis.js";
import { WINDOW_SIZE, MAX_REQUESTS } from "../config/env.js";
import metrics from "../config/metrics.js";
const rateLimiterMiddleware = async (req, res, next) => {
  metrics.totalRequests++;
  const redisKey = `rate_limit:${req.apiKey}`;
  const wasKeyCreated = await redisClient.set(redisKey, 1, {
    EX: WINDOW_SIZE,
    NX: true,
  });

  let currentCount;

  if (wasKeyCreated === "OK") {
    currentCount = 1;
  } else {
    currentCount = await redisClient.incr(redisKey);
  }

  const ttl = await redisClient.ttl(redisKey);
  const remainingRequests = Math.max(0, MAX_REQUESTS - currentCount);

  res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);

  res.setHeader("X-RateLimit-Remaining", remainingRequests);

  if (currentCount > MAX_REQUESTS) {
    res.setHeader("Retry-After", ttl);
    metrics.blockedRequests++;

    return res.status(429).json({
      success: false,
      message: "Rate limit exceeded. Please try again later.",
    });
  }

  metrics.allowedRequests++;

  return next();

  //  USing IP address method --->

  // const clientIP = req.ip;
  // const redisKey = `rate_limit:${clientIP}`;

  // const wasKeyCreated = await redisClient.set(redisKey, 1, {
  //   EX: WINDOW_SIZE,
  //   NX: true,
  // });

  // let currentCount;

  // if (wasKeyCreated === "OK") {
  //   currentCount = 1;
  // } else {
  //   currentCount = await redisClient.incr(redisKey);
  // }

  // const ttl = await redisClient.ttl(redisKey);
  // const remainingRequests = Math.max(0, MAX_REQUESTS - currentCount);

  // res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);

  // res.setHeader("X-RateLimit-Remaining", remainingRequests);

  // if (currentCount > MAX_REQUESTS) {
  //   res.setHeader("Retry-After", ttl);

  //   return res.status(429).json({
  //     success: false,
  //     message: "Rate limit exceeded. Please try again later.",
  //   });
  // }

  // return next();

  // without redis, using in-memory node.js --->

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
