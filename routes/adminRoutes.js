const express  = require('express');

const route = express.Router();
const Hotel = require('../models/Hotel');
const Room = require('../models/Room');
const { createHotel } = require('../services/adminServices');

route.post('/register/hotel', createHotel)

module.exports = route;