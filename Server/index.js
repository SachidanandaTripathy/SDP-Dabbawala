const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const dotenv = require("dotenv");


const registration = require('./Routes/UserRoute');
const login=require('./Routes/LoginRoute')
const getUser=require('./Routes/getUser')
const requests=require('./Routes/Request')
const profile=require('./Routes/Profile')


dotenv.config();
const app = express();
const PORT = 12000;

app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/Dabbwala-SDP';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB database connection established successfully');
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());


app.use('/api', registration);
app.use('/api',login)
app.use('/api',getUser)
app.use('/api',requests)
app.use('/api',profile)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});