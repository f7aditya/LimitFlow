import VALID_API_KEYS from "../config/apiKeys.js";
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "API key is required.",
    });
  }
  if (!VALID_API_KEYS.has(apiKey)) {
    return res.status(401).json({
      success: false,
      message: "Invalid API key.",
    });
  }

  req.apiKey = apiKey;
  next();
};

export default apiKeyMiddleware;
