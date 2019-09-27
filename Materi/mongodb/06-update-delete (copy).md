# MongoDB dengan Node.js



### Update book 



```>``` 

```
app.put('/book/id', (req, res) => {
	Book.findOneAndUpdate({
		_id: req.params.id
	},
	{$set: {title:req.body.title}},
	{upsert:true},
	(err, newBook) => {
		if(err) {
			res.send('Error')
		} else {
			console.log(newBook);
			res.status(204);
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