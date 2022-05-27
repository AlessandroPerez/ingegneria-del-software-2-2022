const express = require ('express');

const router = express.Router();

const Bike = require('../model/Bike');


// Gets back all the posts

router.get('/', async (req, res) => {
  try{
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.json({message:err})
  }
});

// Get back a single post

router.get('/:bikeId', async (req, res) =>{
  try {
    const bike = await Bike.findById(req.params.bikeId);
    res.json(bike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Submit a post

router.post('/', async (req, res) => {
  const bike = new Bike({
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
    sum_review: req.body.sum_review,
    tot_review: req.body.tot_review
  });
  try {
    const savedBike = await Bike.save();
    res.json(savedBike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Delete a specific post

router.delete('/:bikeId', async (req, res) => {
  try {
    const removedBike = await Bike.remove({_id:req.params.bikeId});
    res.json(removedBike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Update a specific post

router.patch('/:bikeId', async (req, res) => {
  try {
    const updatedBike = await Bike.updateOne({_id:req.params.bikeId},
                                             {$set: {title : req.body.title}});
    res.json(updatedBike);
  } catch (err) {
    res.json({ message : err });
  }
})

// Make a reviw

router.patch('/:bikeId', async (req, res) => {
  try {
    const updatedReviw = await Bike.updateOne({_id:req.params.bikeId},
                                             {$set: {tot_review : req.body.tot_review += 1}})
          res.json(updatedBike);
  } catch (err) {
    res.json({ message : err });
  }
})

module.exports = router;
