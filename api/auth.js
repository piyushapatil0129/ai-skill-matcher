const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "YOUR_HOST",
  user: "YOUR_USER",
  password: "YOUR_PASSWORD",
  database: "YOUR_DATABASE"
});

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { action } = req.query;
  const { name, email, password } = req.body;

  if (action === "register") {
    const hashed = await bcrypt.hash(password, 10);
    db.query("INSERT INTO users (name,email,password) VALUES (?,?,?)", [name, email, hashed], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: "User Registered" });
    });
  } else if (action === "login") {
    db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!result[0]) return res.status(404).json({ error: "User not found" });

      const valid = await bcrypt.compare(password, result[0].password);
      if (!valid) return res.status(401).json({ error: "Wrong password" });

      const token = jwt.sign({ id: result[0].id }, "secret");
      res.status(200).json({ token });
    });
  } else {
    res.status(400).json({ error: "Invalid action" });
  }
};