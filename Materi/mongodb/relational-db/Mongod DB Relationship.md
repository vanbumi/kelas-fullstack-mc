# Mongod DB Relationship



## 1. One to One Relation use embeded document

```
> use hospital
switched to db hospital
> db.patiens.insertOne({name: "Dyo", age: 35, history: {rawat: ["sehat", "sehat selalu"]}})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d73a2ea99b074812cedaf58")
}
> db.patiens.insertOne({name: "John", age: 25, history: {rawat: ["flue", "demam"]}})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d73a35a99b074812cedaf59")
}
> db.patiens.find()
{ "_id" : ObjectId("5d73a2ea99b074812cedaf58"), "name" : "Dyo", "age" : 35, "history" : { "rawat" : [ "sehat", "sehat selalu" ] } }
{ "_id" : ObjectId("5d73a35a99b074812cedaf59"), "name" : "John", "age" : 25, "history" : { "rawat" : [ "flue", "demam" ] } }
> db.patiens.find().pretty()
{
	"_id" : ObjectId("5d73a2ea99b074812cedaf58"),
	"name" : "Dyo",
	"age" : 35,
	"history" : {
		"rawat" : [
			"sehat",
			"sehat selalu"
		]
	}
}
{
	"_id" : ObjectId("5d73a35a99b074812cedaf59"),
	"name" : "John",
	"age" : 25,
	"history" : {
		"rawat" : [
			"flue",
			"demam"
		]
	}
}
```



## 2 One to One Relation use Reference

```
> db
carData

> db.person.insertOne({name: "Brandon", age: 18, salary: 3000})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d73b2a899b074812cedaf5a")
}

> db.cars.insertOne({model: "BMW", price: 4000, owner: ObjectId("5d73b2a899b074812cedaf5a")})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d73b30899b074812cedaf5b")
}

> db.person.findOne()
{
	"_id" : ObjectId("5d73b2a899b074812cedaf5a"),
	"name" : "Brandon",
	"age" : 18,
	"salary" : 3000
}

> db.cars.findOne()
{
	"_id" : ObjectId("5d73b30899b074812cedaf5b"),
	"model" : "BMW",
	"price" : 4000,
	"owner" : ObjectId("5d73b2a899b074812cedaf5a")
}
```



## 3. One to Many Relation

```
use cityData
switched to db cityData

> db.cities.insertMany([{name: "Bandung", lang: "Sunda"}, {name: "Yogya", lang: "Jawa"}])
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5d73b79099b074812cedaf5c"),
		ObjectId("5d73b79099b074812cedaf5d")
	]
}

> db.cities.find()
{ "_id" : ObjectId("5d73b79099b074812cedaf5c"), "name" : "Bandung", "lang" : "Sunda" }
{ "_id" : ObjectId("5d73b79099b074812cedaf5d"), "name" : "Yogya", "lang" : "Jawa" }

> db.citizens.insertMany([{name: "Brandon", cityId: ObjectId("5d73b79099b074812cedaf5c")}, {name: "Dyo", cityId: ObjectId("5d73b79099b074812cedaf5d")}])
`{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5d73ba1999b074812cedaf5e"),
		ObjectId("5d73ba1999b074812cedaf5f")
	]
}

> db.citizens.find().pretty()
{
	"_id" : ObjectId("5d73ba1999b074812cedaf5e"),
	"name" : "Brandon",
	"cityId" : ObjectId("5d73b79099b074812cedaf5c")
}
{
	"_id" : ObjectId("5d73ba1999b074812cedaf5f"),
	"name" : "Dyo",
	"cityId" : ObjectId("5d73b79099b074812cedaf5d")
}
```



## 4. Many to many Relation

```
use bookData
switched to db bookData

> db.books.insertOne({name: "My Fav Book", authors: [{name: "Brandon"}, {name: "Bobby"}]})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5d73bce099b074812cedaf60")
}
> db.books.find().pretty()
{
	"_id" : ObjectId("5d73bce099b074812cedaf60"),
	"name" : "My Fav Book",
	"authors" : [
		{
			"name" : "Brandon"
		},
		{
			"name" : "Bobby"
		}
	]
}

> db.authors.insertMany([{name: "Brandon", address: "Jakarta"}, {name: "Bobby", address: "Bandung"}])
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5d73bd9299b074812cedaf61"),
		ObjectId("5d73bd9299b074812cedaf62")
	]
}

> db.authors.find().pretty()
{
	"_id" : ObjectId("5d73bd9299b074812cedaf61"),
	"name" : "Brandon",
	"address" : "Jakarta"
}
{
	"_id" : ObjectId("5d73bd9299b074812cedaf62"),
	"name" : "Bobby",
	"address" : "Bandung"
}

> db.books.updateOne({}, {$set: {authors: [ObjectId("5d73bd9299b074812cedaf61"), ObjectId("5d73bd9299b074812cedaf62")]}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.books.findOne()
{
	"_id" : ObjectId("5d73bce099b074812cedaf60"),
	"name" : "My Fav Book",
	"authors" : [
		ObjectId("5d73bd9299b074812cedaf61"),
		ObjectId("5d73bd9299b074812cedaf62")
	]
}
```