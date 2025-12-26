const express = require("express");
const morgan = require("morgan");

const taskRoutes = require("./routes/taskRoutes");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
