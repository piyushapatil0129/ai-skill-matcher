const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/authMiddleware");
const getRecommendations = require("../utils/aiEngine");

const router = express.Router();

router.get("/recommend", auth, (req, res) => {
  db.query("SELECT skills FROM users WHERE id=?", [req.user.id], (err, result) => {
    const recs = getRecommendations(result[0].skills);
    res.json(recs);
  });
});

module.exports = router;