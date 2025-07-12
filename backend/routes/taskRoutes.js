// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();

router.get('/GetTasks', (req, res) => {
  // Dummy data for now
  const tasks = [
    { id: 1, event: "Backstroke", time: "10:00 AM" },
    { id: 2, event: "Freestyle", time: "11:00 AM" },
  ];
  res.json(tasks);
});

module.exports = router;
