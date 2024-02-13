const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/Users');
const jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {
    const { contactNumber, password } = req.body;
    console.log(contactNumber)
    try {
        const user = await User.findOne({ contactNumber });
        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expires: new Date(Date.now() +  10 * 60 * 1000) });
                console.log(token);

                res.status(200).json({
                    status: 'success',
                    message: 'Login successful',
                    user: { firstName: user.firstName, lastName: user.lastName, contactNumber: user.contactNumber, role: user.role, token },
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
