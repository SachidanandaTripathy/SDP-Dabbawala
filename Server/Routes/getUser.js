const express = require('express');
const router = express.Router();
const authMiddleware=require('../Middleware/AuthMiddleware')

router.get("/user", authMiddleware, async (req, res) => {
    try {

      const user = req.user;
      res.status(200).json({ user });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;