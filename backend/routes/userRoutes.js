const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Test GET route
router.get('/users', (req, res) => {
  res.send('GET /api/users route is working');
});

// Route to create a new user (POST)
router.post('/users', async (req, res) => {
  const { uid, name, email, phoneNumber, photoURL, coverPhotoURL } = req.body;
  try {
    const user = new User({
      uid,
      name,
      email,
      phoneNumber,
      photoURL,
      coverPhotoURL
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Error saving user data' });
  }
});

// Route to get a user by ID (GET)
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ uid: id });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});




module.exports = router;
