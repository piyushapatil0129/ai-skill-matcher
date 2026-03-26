const db = require("../server/config/db");
const jwt = require("jsonwebtoken");

const auth = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("Unauthorized");
  return jwt.verify(token, "secret");
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let user;
  try { user = auth(req); } catch (err) { return res.status(401).json({ error: err.message }); }

  const { skills, interests, goals } = req.body;

  db.query(
    "UPDATE users SET skills=?, interests=?, goals=? WHERE id=?",
    [skills, interests, goals, user.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: "Profile Updated" });
    }
  );
};