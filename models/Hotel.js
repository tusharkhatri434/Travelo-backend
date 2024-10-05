const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cordinate: {
    lat:String,
    long:String,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  totalRooms: {
    type:Number,
    default:25,
    required:true,
  },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  featured: {
    type: Boolean,
    default: false,
  },
});

const Hotel =  mongoose.model("Hotels", HotelSchema);

module.exports = Hotel;