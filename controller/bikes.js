const {Bike, ReviewModel} = require('../model/Bike');

async function handleGetBike(){
   try{
    const bikes = await Bike.find();
     console.log(bikes);
    return bikes.map(bike => {
      return bike.toJSON({virtuals: true});
    });
  } catch (err) {
    console.log(err.message);
    return {message:err};
  }
}

module.exports = {
  BikeController: handleGetBike,
}
