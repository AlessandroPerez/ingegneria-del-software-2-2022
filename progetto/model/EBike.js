const mongoose = require('mongoose');

const userEbike = mongoose.Schema({
     description: { type: String, required: true },
     price: { type: Number, required: true },
     sum_review: { type: Number, required: true },
     tot_review: { type: Number, required: true }
})