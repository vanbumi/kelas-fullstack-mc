const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Sila tuliskan username anda']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Sila tuliskan email anda']
  },
  password: {
    type: String,
    required: [true, 'Sila tuliskan password anda']
  }
});

UserSchema.pre('save', function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, function (error, encrypted) {
    user.password = encrypted;

    next();
  });
});

module.exports = mongoose.model('User', UserSchema);