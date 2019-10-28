const User = require('../database/models/User');

module.exports = (req, res, next) => {

  /** STEPS
   * fetch user from database.
   * verify user.
   * if user is valid, permit request.
   * else redirect
   */

  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.redirect('/');
    };

    next();
  });


};