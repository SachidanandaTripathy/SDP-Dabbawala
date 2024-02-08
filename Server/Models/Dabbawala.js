const mongoose = require('mongoose');

const dabbawalaSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

const Dabbawala = mongoose.model('Dabbawala', dabbawalaSchema);

module.exports = Dabbawala;
