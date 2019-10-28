// require user model
const User = require('../database/models/User');
// require bycrypt
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const { email, password } = req.body;

  // try to find user
  User.findOne({ email }, (error, user) => {
    if (user) {

      // compare user password
      bcrypt.compare(password, user.password, (error, same) => {
        // if user password correct, then login user
        if (same) {
          console.log("berhasil login? " + same);

          // store user session
          req.session.userId = user._id;

          res.redirect('/');

        } else {
          res.redirect('/auth/login');
        }
      })
    } else {
      return res.redirect('/auth/login');
    }
  });
};

