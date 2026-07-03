import "dotenv/config";

export const WINDOW_SIZE = Number(process.env.WINDOW_LIMIT_SIZE);
export const MAX_REQUESTS = Number(process.env.WINDOW_MAX_REQUESTS);

if (Number.isNaN(WINDOW_SIZE) || Number.isNaN(MAX_REQUESTS)) {
  throw new Error("Invalid rate limit configuration.");
}
