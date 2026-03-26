const auth = require('./routes/auth');
const recommend = require('./routes/recommend');
const profile = require('./routes/profile');

module.exports = (req, res) => {
  if (req.url.startsWith('/api/auth')) return auth(req, res);
  if (req.url.startsWith('/api/recommend')) return recommend(req, res);
  if (req.url.startsWith('/api/profile')) return profile(req, res);
  res.status(404).send('API route not found');
};