# MongoDB dengan Node.js



### Post to create new book 

Kita menggunakan body parser untuk get element dari parameter dan juga parse json dari element, tambahkan di baris atas, dibawah database connection:

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
```



```>``` Menambahkan book baru CARA 1

```
app.post('/book', (req, res) => {
	const newBook = new Book();
	
	newBook.title = req.body.title;
	newBook.author = req.body.author;
	newBook.category = req.body.category;
	
	newBook.save((err, book) => {
		if(err) {
			res.send(error saving book);
		} else {
			console.log(book);
			res.send(book);
		}
	});
});
```

```>``` Coba di browser dan postman.



```> ``` Menambahkan book baru CARA 2

```
app.post('book2', (req, res) => {
	Book.create(req.body, (err, book) => {
		if(err) {
			res.send('Error save book');
		} else {
			console.log(book)
			res.send(book)
		}
	});
});
```