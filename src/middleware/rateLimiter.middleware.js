const WINDOW_SIZE = 60 * 1000;
const MAX_REQUESTS = 5;

const requestStore = new Map();

const rateLimiterMiddleware = (req, res, next) => {
  const clientIP = req.ip;

  const clientData = requestStore.get(clientIP);
  if (!clientData) {
    requestStore.set(clientIP, {
      count: 1,
      startTime: Date.now(),
    });
    return next();
  }

  const currentTime = Date.now();

  const elapsedTime = currentTime - clientData.startTime;

  if (elapsedTime > WINDOW_SIZE) {
    requestStore.set(clientIP, {
      count: 1,
      startTime: currentTime,
    });

    return next();
  }

  clientData.count++;
  if (clientData.count > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: "Rate limit exceeded. Please try again later.",
    });
  }

  return next();
};

export default rateLimiterMiddleware;
