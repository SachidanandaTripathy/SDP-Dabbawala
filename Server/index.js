const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const dotenv = require("dotenv");


const registration = require('./Routes/UserRoute');
const login=require('./Routes/LoginRoute')
const getUser=require('./Routes/getUser')


dotenv.config();
const app = express();
const PORT = 12000;

app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/Dabbwala-SDP';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB database connection established successfully');
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Use cors middleware to enable CORS
app.use(cors());

// Routes
app.use('/api', registration);
app.use('/api',login)
app.use('/api',getUser)


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
