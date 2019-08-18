# Pengenalan MongodDB

Ada beberapa point yang harus diingat perbedaan antara Mongodb dengan database biasanya adalah:

#### 1. Tidak menggunakan Table, melainkan "Document".

	{
		"_id": ObjectId("asd45635dafasd435645"),
		"title": "Article Satu",
		"body": "Ini adalah article body" 
	}

Format diatas adalah format JSON.

#### 2. NoSQL atau non-Relational database.

Intinya anda tidak bisa melakukan Join untuk konek ke database tabel lainnya, selain dengan melakukan reference untuk me-link antar document.

contoh: 

	ref = 'User'

### Keuntungan menggunaan NoSQL db

* Quick & Easy Schema Iteration dibandingkan dengan tradisional database.
* Scalability & Performance.
* Object-oriented, sangat mirip dengan JavaScript code.
* Agile Development -> Accomodates large volume of rapidly changing structure, semi-structure dan unstructured data, artinya mudah untuk menambahkan perubahan pada schema database yang sudah ada.

Contoh:

	UserSchema
	
	{
		firstName: "Dyo",
		lastName: "Bumi"
	}

Update schema:

	UserSchema
	
	{
		firstName: "Dyo",
		lastName: "Bumi",
		phone: 0888-888-888
	}



<br>

![mongo](/Users/dyo-medio/Desktop/01-KelasFullstack/img/mongo.png)

Keterangan: Masing masing record memiliki property yang berbeda dengan record yang lain, hal ini tidak sama dengan database RDBMS tradisional database.

<br>

## MongoDB database
#### -> Terdiri dari kumpulan Collections.
#### -> Masing2 Collection menyimpan kumpulan "Record".
#### -> Masing2 Record adalah kumpulan dari "JavaScript Object".
#### -> Yang di sebut JSON. 
#### -> JSON Adalah kumpulan dari Key Value Pair (Pasangan Key dan Value).



The following table shows the relationship of RDBMS terminology with MongoDB.

|    RDBMS    |                         MongoDB                          |
| :---------: | :------------------------------------------------------: |
|  Database   |                         Database                         |
|    Table    |                        Collection                        |
|  Tuple/Row  |                         Document                         |
|   column    |                          Field                           |
| Table Join  |                    Embedded Documents                    |
| Primary Key | Primary Key (Default key _id provided by mongodb itself) |



## Query Mongodb

#### find()

	db.student.find({})
	
	db.student.find({'name': 'Dyo'})
	
	db.student.find({'batch':{$gt:1}}) // gt: small than, lt: less than

#### sort(), limit()

	db.student.find({}).sort({name: 1}).limit(2)

### Membuat Database baru

Buka Terminal dan ketikan mongo

Membuat database baru dan beri nama 'MedioCademy':

	use mediocademy

Untuk pindah ke database lain:

	use namaDatabaseLain

Untuk mengetahui kita berada di database apa:

	db

Untuk menampilkan list database yang ada pada local komputer:

	show dbs

Membuat collection baru beri nama 'student':

	db.createCollection("student")

Menampilkan collection pada database yang bersangkutan:

	show collections

Input data ke dalam collection student:

	db.student.insert({
		name: 'Joe',
		subject: 'JavaScript',
		batch: 1,
		level: ['basic', 'intermediate', 'advance']
	})
	
	db.student.insert({
		name: 'Brandon',
		subject: 'Fullstack',
		batch: 2,
		silabus: ['basic', 'intermediate']
	})
	
	db.student.insert({
		name: 'Ersya',
		subject: 'Laravel',
		batch: 3,
		silabus: ['basic']
	})
	
	db.student.insert({
		name: 'Lucy',
		subject: 'NodeJS',
		batch: 1,
		silabus: ['basic']
	})

### Menampilkan data collection

	db.student.find().pretty()

#### Menampilkan student dengan nama Ersya:

	db.student.find({'name': 'Ersya'})

atau	

	db.student.find({'name': 'Ersya'}).pretty()

#### Filter dengan ```$gt & $lt```:

	db.student.find({'batch':{$lt: 3}}).pretty()
	
	db.student.find({'batch':{$gt: 2}}).pretty()

#### Filter dengan #in command:

	db.student.find({silabus:{$in:['basic']}})
	
	db.student.find({silabus:{$in:['basic', 'intermediate']}})

#### Sort dan Limit:

**Sort**

	db.student.find({'silabus':{$in:['basic']}}).sort({'batch': 1}).pretty() // ascending
	
	db.student.find({'silabus':{$in:['basic']}}).sort({'batch': -1}).pretty() // descending	
	
	db.student.find({}).sort({name: 1}) //
	db.student.find({}).sort({name: -1}) //

**Limit**	
	
	db.student.find({}).sort({name: 1}).limit(2)

More query mongodb at:

https://docs.mongodb.com/manual/tutorial/query-documents/

### Select all documents di dalam Collection

	db.inventory.find( {} )

### Specify Equality Condition

	db.inventory.find( { status: "D" } )

### Specify Conditions Using Query Operators¶

	db.inventory.find( { status: { $in: [ "A", "D" ] } } )

### Specify AND Conditions

	db.inventory.find( { status: "A", qty: { $lt: 30 } } )

### Specify OR Conditions¶



### Menghapus data collection

	db.siswa.deleteOne({
		// data
	})




Artikel ini adalah bagian dari seri **Tutorial MongoDB**

http://www.timposu.com/mongodb-update-document/



- [Mengenal MongoDB](http://www.timposu.com/mengenal-mongodb/)
- [MongoDB - Cara Install MongoDB di Windows](http://www.timposu.com/cara-install-mongodb-windows/)
- [MongoDB - Cara Install MongoDB Di Linux](http://www.timposu.com/cara-install-mongodb-di-linux/)
- MongoDB - Perintah Dasar MongoDB
- [MongoDB - Membuat Database](http://www.timposu.com/membuat-database-mongodb/)
- [MongoDB - Menghapus Database](http://www.timposu.com/menghapus-database-mongodb/)
- [MongoDB - Membuat Collection](http://www.timposu.com/membuat-collection-mongodb/)
- [MongoDB - Menghapus Collection](http://www.timposu.com/menghapus-collection-mongodb/)
- [MongoDB - Tipe Data](http://www.timposu.com/tipe-data-mongodb/)
- [MongoDB - Insert Data](http://www.timposu.com/mongodb-insert-document/)
- [MongoDB - Query di MongoDB](http://www.timposu.com/mongodb-query/)
- [MongoDB - Update Document](http://www.timposu.com/mongodb-update-document/)
- [MongoDB - Delete Document](http://www.timposu.com/mongodb-delete/)
- [MongoDB - Menggunakan Limit & Skip](http://www.timposu.com/mongodb-menggunakan-limit-and-skip/)
- [MongoDB - Mengurutkan/Sort Document MongoDB](http://www.timposu.com/mongodb-mengurutkan-sort-document-mongodb/)

Ini adalah tutorial singkat MongoDB, yang berisi perintah-perintah dasar MongoDB

## melihat database

```
db
```

## membuat database

contoh membuat collection dengan nama siswa

```
use  siswa
```

## menghapus database

```
db.dropDatabase()
```

## insert data

contoh membuat tabel sekaligus melakukan insert

```
db.siswa.insert(
    {
        "nama":"Ucup",
        "alamat":"Jln. Loyo Selalu",
        "usia":13
    }
)
```

Id key otomatis dibuatkan



## insert data array

```
db.siswa.insert(
    [{
        "nama":"Azwar Anas",
        "alamat":"Jln. Slamet Riyadi",
        "usia":15
     },
     {
        "nama":"Abd Munir",
        "alamat":"Jln. Sutoyo",
        "usia":17
     }    
    ]
)
```

## melihat daftar collection dalam database

```
show collections
```

## melihat isi collection

```
db.siswa.find()
```

## melihat isi collection dalam bentuk JSON

```
db.siswa.find().pretty()
```

## melihat isi collection hanya 1 result

```
db.siswa.findOne()
```

atau menampilkan dengan id tertentu

```
db.siswa.findOne(
 {"_id" : ObjectId("56337621a5741ce990f98a12")}
)
```



## menghapus data (remove)

```
db.siswa.remove({
    "_id" : ObjectId("56337621a5741ce990f98a12")
})
```

## mengubah data (update)

```
db.siswa.update(
    {"_id" : ObjectId("56337621a5741ce990f98a11")},
    {
     "nama" : "Azwar Anas",
     "alamat" : "Jln. Taubat Nasuha",
     "usia" : 15
    }
)
```

## menghapus collection

```
db.siswa.drop()
```



### Latihan

Buat Datase: Sekolah

Buat Collection: Siswa

```
db.siswa.insertMany([
   { nama: "Budi", kelas: 12, ekskul: ["blank", "red"], matpel: [ "Matematika", "Fisika", "Kimia", "Komputer" ] },
   { nama: "Wati", kelas: 10, ekskul: ["blank", "red"], matpel: [ "Matematika", "Fisika", "Kimia", "Komputer" ] },
   { nama: "Brandon", kelas: 11, ekskul: ["blank", "red"], matpel: [ "Matematika", "Fisika", "Kimia", "Komputer" ] },
   { nama: "Vadya", kelas: 9, ekskul: ["blank", "red"], matpel: [ "Matematika", "Fisika", "Kimia", "Komputer" ] },
   { nama: "Erya", kelas: 8, ekskul: ["blank", "red"], matpel: [ "Matematika", "Fisika", "Kimia", "Komputer" ] },
]);
```

