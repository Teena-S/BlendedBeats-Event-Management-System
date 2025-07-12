const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import your route handlers
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const taskRoutes = require('./routes/taskRoutes');

// ✅ Use the route handlers
app.use('/api/users', userRoutes);
app.use('/api/Students', studentRoutes);
app.use('/api/Tasks', taskRoutes);

// ✅ Default route
app.get('/', (req, res) => {
  res.send('BlendedBeats Event Backend is running!');
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});
