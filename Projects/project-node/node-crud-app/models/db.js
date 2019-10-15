const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.')
  }
  else {
    console.log('Error in DB connection : ' + err)
  }
});


// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://dyo123:IJoRPoEAXqdDHPSV@nodecrudmedio-n34bm.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect((err, client) => {
//   if (err) {
//     console.log('error to connect database...');
//   } else {
//     console.log("Connected to database...");
//   }

//   const collection = client.db("test").collection("devices");

//   // perform actions on the collection object
//   client.close();
// });

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://dyo123:IJoRPoEAXqdDHPSV@nodecrudmedio-n34bm.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect((err, client) => {
//   if (err) {
//     console.log('error connected');
//   } else {
//     console.log('sudah bisa connected')
//   }
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


require('./employee.model');

