const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./Book');

// koneksi database
// const db = 'mongodb://localhost/sekolah';
// mongoose.connect(db, { useNewUrlParser: true });

mongoose.connect('mongodb://localhost/gedebook', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database Connected..')
});

// membuat route
app.get('/', (req, res) => {
  res.send('Halaman Index')
});

// menampikan all books
app.get('/books', (req, res) => {
  console.log('get all books')
  Book.find({})
    .exec((err, books) => {
      if (err) {
        res.send(err);
      } else {
        console.log(books)
        res.json(books)
      }
    })
});

// menampilkan single book
app.get('/books/:id', (req, res) => {
  console.log('Get one book');
  Book.findOne({
    _id: req.params.id
  })
    .exec((err, book) => {
      if (err) {
        res.send(err);
      } else {
        console.log('book');
        res.json(book);
      }
    })
});

// route post book cara 1
app.post('/book', (req, res) => {
  const newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save((err, book) => {
    if (err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});

// route post book cara 2
app.post('/book2', (req, res) => {
  Book.create(req.body, (err, book) => {
    if (err) {
      res.send('Error save book');
    } else {
      console.log(book)
      res.send(book)
    }
  });
});

// update
app.put('/book/:id', (req, res) => {
  Book.findOneAndUpdate({
    _id: req.params.id
  },
    { $set: { title: req.body.title } },
    { upsert: true },
    (err, newBook) => {
      if (err) {
        res.send('Error')
      } else {
        console.log(newBook);
        res.send(newBook);
      }
    });
});


// setup server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});