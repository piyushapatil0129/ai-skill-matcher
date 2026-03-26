const db = require("../server/config/db");
const getRecommendations = require("../server/utils/aiEngine");
const jwt = require("jsonwebtoken");

const auth = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("Unauthorized");
  return jwt.verify(token, "secret");
};

module.exports = async (req, res) => {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  let user;
  try { user = auth(req); } catch (err) { return res.status(401).json({ error: err.message }); }

  db.query("SELECT skills FROM users WHERE id=?", [user.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result[0]) return res.status(404).json({ error: "User not found" });

    const recs = getRecommendations(result[0].skills);
    res.status(200).json(recs);
  });
};