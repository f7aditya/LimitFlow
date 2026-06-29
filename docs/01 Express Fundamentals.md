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

# How Express Stores Routes

- Express stores every route in an internal routing stack.
- Routes are checked in the order they are registered.
- Express compares both the HTTP method and the URL path.
- Once a matching route sends a response, Express stops checking further routes.

---

## Important

Always place specific routes before dynamic routes.

Correct:

/users

/:id

Incorrect:

/:id

/users

# Route Parameters

Used to capture dynamic values from the URL.

Example

/users/:id

Request

/users/25

req.params

{
id: "25"
}
