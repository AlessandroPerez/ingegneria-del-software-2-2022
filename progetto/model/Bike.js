const mongoose = require('mongoose');

const BikeSchema = mongoose.Schema({
     description: { 
          type: String,
          required: true },
     price: { 
          type: Number,
          required: true },
     sum_review: { 
          type: Number, 
          required: true },
     tot_review: { 
          type: Number, 
          required: true }
})

module.exports = mongoose.model('Bike', BikeSchema);
