const express = require ('express');

const router = express.Router();

const {Bike, ReviewModel} = require('../model/Bike');

const Reservations = require('../model/Reservations');

const mongoose = require('mongoose');

// Gets back all the bikes

router.get('/', async (req, res) => {
  try{
    const bikes = await Bike.find();
    res.json(bikes.map(bike => {
      return bike.toJSON({virtuals: true});
    }));
  } catch (err) {
    console.log(err.message);
    res.json({message:err})
  }
});

// Get back a single bike

router.get('/:bikeId', async (req, res) =>{
  try {
    const bike = await Bike.findById(req.params.bikeId);
    res.json(bike.toJSON({virtuals: true}));
  } catch (err) {
    res.json({ message : err });
  }
});

// Submit a bike

router.post('/', async (req, res) => {
  const bike = new Bike({
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
  });
  try {
    const savedBike = await bike.save();
    res.json(savedBike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Delete a specific bike

router.delete('/:bikeId', async (req, res) => {
  try {
    const removedBike = await Bike.remove({_id:req.params.bikeId});
    res.json(removedBike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Update a specific bike

router.patch('/:bikeId', async (req, res) => {
  try {
    const updatedBike = await Bike.updateOne({_id:req.params.bikeId},
                                             {$set: {title : req.body.title}});
    res.json(updatedBike);
  } catch (err) {
    res.json({ message : err });
  }
});

// Make a reviw

router.post('/:bikeId/review', async (req, res) => {
  try {
    const review = new ReviewModel({
      vote: req.body.vote,
    })
    const bike = await Bike.findById(req.params.bikeId);
    try {
      bike.reviews.push(review.toJSON());
      const savedBike = await bike.save();
      res.json(savedBike);
    } catch (err) {
      res.json({message: err});
    }
  } catch (err) {
    res.json ({message: err});
  }
});

router.post('/:bikeId/reservation', async (req, res) => {
  try {
    const reservations = await Reservations.find({start_date: {$lt: req.body.end_date}, end_date: {$gt: req.body.start_date}, bike: mongoose.Types.ObjectId(req.params.bikeId)})
    if (reservations?.length) {
      res.json({message: "The Ebike is currently reserved"});
    } else {
      const reservation = new Reservations ({
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        bike: mongoose.Types.ObjectId(req.params.bikeId),
      })
      const savedReservation = await reservation.save();
      res.json(savedReservation);
    }
  } catch (err) {
    res.json({message: err});
  }
});

module.exports = router;
