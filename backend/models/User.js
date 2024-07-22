const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  photoURL: { type: String },
  coverPhotoURL: { type: String }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
