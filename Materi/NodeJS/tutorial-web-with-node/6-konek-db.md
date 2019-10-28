# # Membuat Web Blog dengan NodeJS



## 6. Konek Database.

Kita akan gunakan mongoDB sebagai database, mongodb bisa kita gunakan dengan 2 cara:

* **cara 1 yaitu setup mongodb database di local pc**. 

* **cara 2 yaitu menggunakan cloud database mongodb Atlas** di mongodb.com.



#### >> Cara 1  Setup Local Mongodb

```>``` Download dan Install mongodb di computer anda.

```>``` https://github.com/vanbumi/Bootcamp-Preparation/blob/master/Instal-mongodb.md.



#### >> Cara 2 Setup Cloud Database.

```>``` Membuat akun di mongodb.com untuk menggunakan Mongodb Atlas.

```>``` Cara setup bisa dilihat disini: https://github.com/vanbumi/setup-mongodb-atlas

```>``` Setelah selesai lakukan setup, perintah terakhir adalah connect to aplikasi, dengan cara klik Clusters pada menu sebelah kiri.

```>``` Klik button CONNECT.

```>``` Klik "Connect Your Application".

```>``` Pada "Add your connection string into your application code", terdapat 2 pilihan yaitu: "Connection String Only" dan "Full Driver Example", anda bisa pilih Full Driver Example tab dan copy, sbb:

``` javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:<password>@bloggernode-udx5f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

```>``` Ubah password nya seperti yang anda input pada saat setup tadi.

```>``` Anda dapat modifikasi kode nya untuk mendapatkan console.log report bila koneksi sukses, sbb:

``` javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:<password>@bloggernode-udx5f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if (!err) {
    console.log('Database mongodb CONNECTED!')
  }
  
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```



### Install mongoose

```
npm i mongoose --save
```

```>``` Pada file index.js require mongoose:

```
const mongoose = require('mongoose');
```

```>``` Tambahkan string kode koneksi dibawah nya:



**>> Untuk Local Database**

```javascript
mongoose.connect('mongodb://localhost/nama_database')
```

atau kode lengkapnya silahkan lihat di npm mogoose: https://www.npmjs.com/package/mongoose

```javascript
mongoose.connect('mongodb://localhost/nama_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```



**>> Untuk Mongodb Atlas database**

```javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:<password>@bloggernode-udx5f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if (!err) {
    console.log('Database mongodb CONNECTED!')
  }
  
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```



```>``` Cek pada Terminal Anda cek dipaling bawah "**Database mongodb CONNECTED**" artinya database sudah Konek dan Ready!

```>``` Bila anda menemukan error seperti ini:

``` javascript
(node:9782) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
```

Anda refer ke website npm monggose dan perhatikan update kode koneksi nya sbb:

```javascript
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

Artinya kita harus menambahkan tulisan: ```useUnifiedTopology: true```

```>``` Kode lengkapnya seperti ini:

```javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:<password>@bloggernode-udx5f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
  useNewUrlParser: true,
	useUnifiedTopology: true
});
client.connect(err => {
  if (!err) {
    console.log('Database mongodb CONNECTED!')
  }
  
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```



```>``` Atau gunakan **async await** sbb :

```javascript
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/my_database_name', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected...')
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
}
```





```>``` Source code: https://github.com/vanbumi/bloger-node/tree/06





<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

