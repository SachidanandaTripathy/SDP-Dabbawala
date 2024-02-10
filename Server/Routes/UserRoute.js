const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Models/Users');

const router = express.Router();

router.post('/registration', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactNumber,
      location,
      password,
      role,
    } = req.body;
    
    const existingUser = await User.findOne({ contactNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this contact number already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      contactNumber,
      location,
      password: hashedPassword,
      role:role,
    });

    await newUser.save();

    res.status(200).json({ message: 'Dabbawala registered successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
