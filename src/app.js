import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to LimitFlow",
  });
});

export default app;
