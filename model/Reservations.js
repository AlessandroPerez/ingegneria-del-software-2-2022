const mongoose = require('mongoose');

const ReservationsSchema = mongoose.Schema({
  start_date: {
    type: Number,
    required: true
  },
  end_date: {
    type: Number,
    required: true
  },
  bike: {
    type: mongoose.Types.ObjectId,
    required: true
  },
});

module.exports = mongoose.model('Reservations', ReservationsSchema);
