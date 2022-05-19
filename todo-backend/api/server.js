const express = require("express");
const server = express();

const usersRouter = require("./users/users-router");
const authRouter = require("../auth/auth-router");

server.use(express.json());

server.use("/auth", authRouter);
server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "server is up" });
});

module.exports = server;
