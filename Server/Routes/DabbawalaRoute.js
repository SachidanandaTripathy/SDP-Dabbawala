const express = require('express');
const Dabbawala = require('../Models/Dabbawala');

const router = express.Router();

router.post('/dabbawalaRoutes', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactNumber,
      location,
      password,
    } = req.body;



    const newDabbawala = new Dabbawala({
      firstName,
      lastName,
      contactNumber,
      location,
      password,
    });


    await newDabbawala.save();

    res.status(200).json({ message: 'Dabbawala registered successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
