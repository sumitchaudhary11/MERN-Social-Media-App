const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Ensure the path is correct

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // To parse JSON bodies

// Use routes defined
app.use('/api', userRoutes);

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/social_media'; // Ensure correct URI
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
