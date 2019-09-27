# MongoDB dengan Node.js



### Monggose: 

https://mongoosejs.com/

Adalah Node Module, mongoose adalah API untuk berinteraksi dengan MongoDB.

Bertugas untuk: 

1. Membuat schema database.
2. Manipulasi data.

The schema creates key value pairs for the different data types available to us within Mongo DB.

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: String,
	published: {
		type: Date,
		default: Date.now
	},
	author: {
		type: Schema.ObjectId,
		// type: Schema.Type.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Book', BookSchema);

```

 