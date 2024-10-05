const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL = process.env.MONGO_URI;
// const mongoURL = 'mongodb://127.0.0.1:27017/zoco';
const mongoURL = `${MONGO_URL}`;
const User = require('./models/User');
const Room = require('./models/Room');
const Booking = require('./models/Booking');
const Hotel = require('./models/Hotel');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(cors())
app.use(express.json());
app.use('/api',userRoutes);
app.use('/admin',adminRoutes);



async function serverStart(){
  
   await mongoose.connect(mongoURL)
      .then(() => {
        console.log('Connected to MongoDB successfully!');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`);
    })
}

serverStart();