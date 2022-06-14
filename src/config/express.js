const express = require("express");
const routes = require("../api/routes");

const app = express();

// convert request body to JSON
app.use(express.json());

// mount api routes
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to test API!",
  });
});

app.use("/", routes);

module.exports = app;
