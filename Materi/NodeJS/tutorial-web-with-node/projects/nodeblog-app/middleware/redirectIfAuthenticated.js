const User = require('../database/models/User');

module.exports = (req, res, next) => {

  /**
   * Jika user sudah login tidak dapat visit. 
   * halaman register dan login
   */

  if (req.session.userId) {
    return res.redirect('/')
  }

  next();
};