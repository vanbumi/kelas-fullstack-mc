const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://dyo:dyo123@rest-node-atlas-xiqwm.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "rest-node-atlas";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

// POST
app.post('/person', (req, res) => {
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

// GET
app.get('/people', (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

// GET Single person
app.get('/person/:id', (req, res) => {
  collection.findOne({ '_id': new ObjectId(req.params.id) }, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});


app.listen(3000, () => {
  console.log('server run...')

  MongoClient.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("people");
    console.log("Connected to `" + DATABASE_NAME + "`!");
  });
});
