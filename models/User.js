const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        country: {
          type: String,
        },
        img: {
          type: String,
        },
        city: {
          type: String,
        },
        phone: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        }
    },{timestamps:true});

const User = mongoose.model('Users',UserSchema);

module.exports = User;