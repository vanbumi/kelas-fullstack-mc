## MongoDB Atlas dan NodeJS.

> still full of bugs

ref: https://codeforgeek.com/mongodb-atlas-node-js/

MongoDB Atlas adalah database service platform untuk MongoDB.

MongoDB deployment dan managemement adalah salah satu point yang menyakitkan untuk independent developer dan startup skala kecil yang tidak mampu membayar engineer mongodb infrastructure.

MongoDB Atlas menjadi solusi isu diatas dan saat ini anda dapat menggunakan service ini.

Tutorial ini akan menunjukan cara membuat akun MongoDB Atlas dan cara connect ke database dengan menggunakan code.

### Get Start with mongo Atlas

```>``` create the MongoDB Atlas account. https://www.mongodb.com/cloud/atlas.

```>``` create your first cluster, Click on the green button named “Build New Cluster”.

```>``` Shared Cluster – Pilih yang Free.

```>``` choose the cloud provider of your choice from Amazon, Microsoft, and Google.

```>``` switch to the security tab and click on IP Whitelist. You need to add the **IP of your machine** to allow the connection or you can add 0.0.0.0 to connect from anywhere ( not recommended ).

```>``` Add user.

```>``` Connecting to MongoDB Atlas Using Node. click on the connect button.

```>``` Click on Connect your application and choose the driver as 3.06. This will provide you the connection string similar to shown below.

```
mongodb+srv://shahid:<PASSWORD>@cluster0-1q7ty.mongodb.net/test
```

atau gunakan Full Driver Example:

```
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo123:<password>@nodecrudmedio-n34bm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

Copy it and save it to use later. Replace the PASSWORD with the password you have provided while creating the connection.




## Create Node application

```>``` Create a new folder and initiate the Node project using the following command.

```
npm init --y
```

```>``` install the MongoDB driver using the following command.

```
npm i --S mongodb
```

```>``` Buat file index.js.

```>``` paste code connection string di file tsb, dan modif code nya menjadi seperti dibawah:

```
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://dyo123:<password>@konek-atlas-node-tlna7.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, client) => {
  if (err) {
    console.log('error connected');
  } else {
    console.log('success connected')
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```
