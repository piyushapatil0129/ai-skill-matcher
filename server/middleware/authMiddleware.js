const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.send("Access denied");

  const verified = jwt.verify(token, "secret");
  req.user = verified;
  next();
};