const express = require("express");
const server = express();

const usersRouter = require("./users/users-router");
const authRouter = require("../auth/auth-router");
const titleRouter = require("../api/todo/todo-title/todo_title-router");

server.use(express.json());

server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/title", titleRouter);

server.get("/", (req, res) => {
  res.json({ api: "server is up" });
});

module.exports = server;
