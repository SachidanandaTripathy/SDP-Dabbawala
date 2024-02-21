const express = require('express');
const User = require('../Models/Users');

const router = express.Router();

router.get('/requests', async (req, res) => {
    try {
      // for Dabbawala users with verify status false
      const requests = await User.find({ role: 'Dabbawala', verify: false });
      res.json(requests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
