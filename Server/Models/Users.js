const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    required:true,
  }
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
