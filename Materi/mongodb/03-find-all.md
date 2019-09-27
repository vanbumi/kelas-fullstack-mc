# MongoDB dengan Node.js



### Latihan 

```>``` Buat folder project mongose-lat.

```>``` Buka dengan code editor.

```>``` ```npm init```.

```>``` Buat file baru "index.js".

```>``` Buat file baru "Book.model.js".

```>``` ```npm i --save express mongoose body-parser```.

```>``` Update file index.js:

```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
```

```>``` ```node index.js```.



```>``` Update file Book.model.js:

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: String,
	author: String,
	category: String
});

module.exports = mongoose.model('Book', BookSchema);
```



```>``` Kembali ke file index.js, require Book model tsb diatas:

```
const Book = require('./Book.model');
```

```>``` Setup database pada file index.js:

```
const db = 'mongodb://localhost/gedebook';
mongoose.connect(db, { useNewUrlParser: true });
```

```>``` ```node index.js```

```>``` Buka mongocompass dan buat database "gedebook" dan collections "books".

```>``` Buka mongoshell:

```
show dbs
use gedebook
show collections

// masukan data sbb:
db.books.insert({
	title: 'Refactor DOM',
	author: 'Joe B',
	category: 'Technology'
})

db.books.insert({
	title: 'Learn Node',
	author: 'John Doe',
	category: 'Technology'
})

db.books.insert({
	title: 'Get Rich Fast',
	author: 'Joe Bullion',
	category: 'Business'
})
```



```>``` membuat route pada index.js

```
app.get('/', (req, res) => {
	res.send('Halaman Index')
});

app.get('/books', (req, res) => {
	console.log('get all books')
	Book.find({})
		.exec((err, books) => {
			if(err){
				res.send(err);
			} else {
				console.log(books)
				res.json(books)
			}
		})	
});

```

```>``` Lihat hasilnya pada localhost:3000/books.

```>``` Dan cek juga console dan Postman.



```>``` route Get single book

```
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
```