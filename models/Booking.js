const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true }],
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true }
  });
  
const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;