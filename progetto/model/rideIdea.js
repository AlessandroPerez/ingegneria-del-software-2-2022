const mongoose = require('mongoose');

const rideIdea = mongoose.Schema({
     description: { 
          type: String,
          required: true },
     duration: { 
          type: Number,
          required: true }
})

module.exports = mongoose.model('rideIdea', rideIdeaSchema);