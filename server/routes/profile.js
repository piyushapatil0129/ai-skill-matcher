const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/profile", auth, (req, res) => {
  const { skills, interests, goals } = req.body;

  db.query(
    "UPDATE users SET skills=?, interests=?, goals=? WHERE id=?",
    [skills, interests, goals, req.user.id],
    () => res.send("Profile Updated")
  );
});

module.exports = router;