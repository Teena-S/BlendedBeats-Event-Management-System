const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Backend received:", { email, password });

  if (email === "admin@example.com" && password === "123456") {
    return res.json({ Status: "Success", user_id: 1 });
  } else {
    return res.json({ Status: "Error", Error: "Invalid credentials" });
  }
});

module.exports = router;
