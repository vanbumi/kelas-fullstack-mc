require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();

const employeeController = require('./controllers/employeeController');

// halaman index
app.get('/', (req, res) => {
  // res.json('Halaman Index');
  res.render("home/index", {
    viewTitle: "home"
  });
});

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

// setup views & handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server started at port ${port}`);
});

// app.use('/', employeeController);
app.use('/employee', employeeController);