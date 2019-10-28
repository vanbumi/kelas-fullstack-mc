module.exports = (req, res) => {
  // tambahkan condition
  if (req.session.userId) {

    return res.render("create")
  }

  res.redirect('/auth/login');
};