require('dotenv').config();
//console.log(process.env);

const express = require('express');
const path = require('path');
const { config, engine } = require('express-edge');
const mongoose = require('mongoose');
const Post = require('./database/models/Post');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const createUserController = require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');
const edge = require('edge.js');
const logoutController = require('./controllers/logout');
const cloudinary = require('cloudinary');

const auth = require('./middleware/auth');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');


const app = express();

// connect database
// mongoose.connect('mongodb://localhost/nodeblog_app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost/nodeblog_app', {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });

//     console.log('MongoDB Connected...')
//   } catch (error) {
//     console.error(error.message);

//     process.exit(1);
//   }
// }

mongoose.connect(process.env.DB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
    }
    else {
      console.log('Error in DB connection : ' + err)
    }
  });

// middleware connect flash
app.use(connectFlash());

// middleware cloudinary
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME
});

// connect-mongo  
const mongoStore = connectMongo(expressSession);

// middleware express-session
app.use(expressSession({
  secret: process.env.EXPRESS_SESSION_KEY,
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// Validation middleware
// const validateCreatePostMiddleware = (req, res, next) => {
//   if (!req.files.image) {
//     return res.redirect('/posts/new')
//   }
//   next();
// };

//app.use("/posts/store", validateCreatePostMiddleware);

// setup middleware edge.js
app.use('*', (req, res, next) => {
  edge.global('auth', req.session.userId);
  next();
});

// midleware file upload
app.use(fileUpload());

// setup body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// setup engine edge
app.use(engine);
app.set('views', `${__dirname}/views`);

// create static page
app.use(express.static('public'));

// Update index to Display Post
app.get('/', homePageController);

// create route about
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
  res.render('about');
});

// create route post
app.get('/post/:id', getPostController);

// create route contact
app.get('/contact', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
  res.render('contact');
});

// route create form new post
app.get('/posts/new', auth, createPostController);

// route POST request
app.post('/posts/store', storePostController);

// route for Logout
app.get('/auth/logout', auth, logoutController);

// route register user
app.get('/auth/register', redirectIfAuthenticated, createUserController);
// route Post user
app.post('/users/register', redirectIfAuthenticated, storeUserController);
// route GET Login User
app.get('/auth/login', redirectIfAuthenticated, loginController);
// Route POST request from form login
app.post('/users/login', redirectIfAuthenticated, loginUserController);

// Route not found
app.use((req, res) => res.render('not-found'));




// start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
});