const express  = require('express');

const route = express.Router();
const Hotel = require('../models/Hotel');

route.get("/hotels",async (req,res)=>{
    try {
        const data = await Hotel.find();
        return res.status(200).send({hotels:data});
    } catch (error) {
        
    }
})


module.exports = route;