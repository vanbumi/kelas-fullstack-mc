# MongoDB dengan Node.js



### Get Single Book 

```>``` Buat route baru di bawahnya untuk menampilkan single book berdasarkan ID.

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

```>``` Coba di browser dan Postman.