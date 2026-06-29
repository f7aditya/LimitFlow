# app.listen()

## Purpose

Starts the HTTP server and makes it listen for incoming requests on a specific port.

Example

```js
app.listen(3000);
```

# Routes

A route tells Express what to do when a specific HTTP request arrives.

Example

```js
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to LimitFlow",
  });
});
```
