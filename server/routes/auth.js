const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, hashed],
    (err, result) => {
      if (err) return res.send(err);
      res.send("User Registered");
    }
  );
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
    if (result.length === 0) return res.send("User not found");

    const valid = await bcrypt.compare(password, result[0].password);
    if (!valid) return res.send("Wrong password");

    const token = jwt.sign({ id: result[0].id }, "secret");

    res.json({ token });
  });
});

module.exports = router;