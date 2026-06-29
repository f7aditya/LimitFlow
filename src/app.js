import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to LimitFlow",
  });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/users/:id", (req, res) => {
  res.json({
    userId: req.params.id,
  });
});

app.get("/search", (req, res) => {
  res.json(req.query);
});

export default app;
