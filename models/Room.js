const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({

  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  roomType: {
    type: String, // // e.g., Single, Double, Suite
    enum: ['single', 'double', 'suite'], 
    required: true,
  }, 
  pricePerNight: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
    default: true,
  },
  
});

const Room = mongoose.model("Rooms", roomSchema);

module.exports = Room;
