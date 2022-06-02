const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
     vote: {
          type: Number,
          required: true
     },
     date: {
          type: Number,
          required: true,
          default: Date.now,
     },
})

const BikeSchema = new mongoose.Schema({
     model: {
          type: String,
          required:true},
     description: { 
          type: String,
          required: true },
     price: { 
          type: Number,
          required: true },
     reviews: {
          type: [ReviewSchema],
          default: [],
     },
})

BikeSchema.virtual("avg_review").
     get(function() {
          let sum_review = this.reviews.reduce(
               (previewsValue, currentValue) => {
                 return {vote: previewsValue.vote + currentValue.vote}
               },
               {vote: 0}
          )
          return sum_review.vote/this.reviews.length;
     })
module.exports = {
     Bike: mongoose.model('Bike', BikeSchema),
     ReviewModel: mongoose.model('Review', ReviewSchema),
}
