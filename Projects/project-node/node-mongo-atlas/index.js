const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo123:<password>@nodecrudmedio-n34bm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://dyo123:dyo123@konek-atlas-node-tlna7.mongodb.net/test?retryWrites=true&w=majority";

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