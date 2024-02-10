const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/Users');

router.post('/login', async (req, res) => {
    const { contactNumber, password } = req.body;

    try {
        const user = await User.findOne({ contactNumber });
        console.log(user)
        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                res.status(200).json({
                    status: 'success',
                    message: 'Login successful',
                    user: {firstName: user.firstName,lastName:user.lastName, contactNumber: user.contactNumber},
                });
            } else {
                res.status(401).json({ status: 'error', message: 'Invalid contact number or password' });
            }
        } else {
            res.status(401).json({ status: 'error', message: 'Invalid contact number or password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

module.exports = router;
