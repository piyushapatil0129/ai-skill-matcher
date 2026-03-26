// server.js

// 1️⃣ Import Express
const express = require('express');

// 2️⃣ Create an Express app
const app = express();

// 3️⃣ Middleware to parse JSON
app.use(express.json());

// 4️⃣ Example route
app.get('/', (req, res) => {
  res.send('Hello World! Server is running ✅');
});

// 5️⃣ Add your other API routes here
// Example:
// app.get('/api/skills', (req, res) => {
//   res.json({ skills: ['JavaScript', 'Python', 'React'] });
// });

// 6️⃣ Set the port
const PORT = process.env.PORT || 5000;

// 7️⃣ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});