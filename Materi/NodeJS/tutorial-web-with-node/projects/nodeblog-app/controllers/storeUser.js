const User = require('../database/models/User');

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      // create registration error
      const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message);

      // simpan kedalam session
      // req.session.registrationErrors = registrationErrors;
      // update menjadi
      req.flash('registrationErrors', registrationErrors);

      // agar data input persist pada form register
      req.flash('data', req.body);

      return res.redirect('/auth/register');
    }
    res.redirect('/');
  });
};