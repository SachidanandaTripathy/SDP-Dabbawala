const express = require('express');
const User = require('../Models/Users');

const router = express.Router();

router.get('/profile', async (req, res) => {
  try {
    const { contactNumber } = req.query;

    if (!contactNumber) {
      return res.status(400).json({ error: 'Contact number is required' });
    }

    // Find the user based on contactNumber
    const user = await User.findOne({ contactNumber });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
