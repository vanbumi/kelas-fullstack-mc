const Post = require('../database/models/Post');

module.exports = async (req, res) => {
  const posts = await Post.find({}).populate('author').sort({ createdAt: -1 });

  // tambahkan console.log
  //console.log(req.session)

  res.render("index", {
    posts
  });
};