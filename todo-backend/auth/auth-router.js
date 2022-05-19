const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("./config/secret");
const { isValid } = require("../middleware/valid");

const router = require("express").Router();
const users = require("../api/users/users-model");

router.post("/register", async (req, res, next) => {
  const cred = req.body;

  try {
    if (isValid(cred)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hash = bcrypt.hashSync(cred.password, rounds);
      cred.password = hash;
      const token = generateToken(user);
      req.status(201).json({ data: `id ${user.id}`, cred, token });
    } else {
      res.status(400).json({ message: "username or password is missing" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Username is already taken" });
  }
});
