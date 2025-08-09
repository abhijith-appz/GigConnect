const express = require('express');
const User = require('../models/User');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Get profile
router.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// Update profile
router.put('/me', protect, async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
