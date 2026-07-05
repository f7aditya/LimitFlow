import { getHealthStatus } from "../services/health.service.js";
const user = { name: "Aditya" };

export const getHealth = (req, res) => {
  const health = getHealthStatus();

  res.status(200).json(health);
};
