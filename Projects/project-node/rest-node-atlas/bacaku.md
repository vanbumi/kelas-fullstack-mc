## Developing A RESTful API With Node.js And MongoDB Atlas

ref: https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/

database_project_name: rest-node-atlas.

**String Connection database in server method**:

```
app.listen(3000, () => {
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
```

**Post Method**

```
app.post('/person', (req, res) => {
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});
```

**Get method**

```
app.get("/people", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
```

**curl POST**

```
curl -X POST \
    -H 'content-type:application/json' \
    -d '{"firstname":"Maria","lastname":"Raboy"}' \
    http://localhost:3000/person
```

**curl GET**

```
curl -X GET http://localhost:3000/people
```