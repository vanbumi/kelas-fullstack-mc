# JavaScript Fundamental

## Function



```>``` **Function Declarations atau Statement**

```javascript
function greet(){
  console.log('Hai hai')
  // atau
  return 'Hello';
}

/** tidak akan terjadi apa2 selama belum dipanggil
* cara memanggil 
*/

greet();
// atau
console.log(greet());
```



​	```>>``` Function argument

```javascript
function greet(firstName, lastName){
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));
```



​	```>>``` Default Parameter

```	javascript
function greet(firstName = 'Brandon', lastName = 'Jovan'){
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));
```

Dengan default parameter jika value parameter tidak di assign maka value default yang akan ditampilkan.



```>``` **Function Expressions**

```javascript
const square = function(x = 3) { // value 3 adalah default
  return x * x;
}

console.log(square());
```



```>``` **Immidiately Invocable function expression - IIFEs**

contoh:

```javascript
(function(){
  console.log('Ini adalah IIFEs....')
});
```

tidak akan terjadi apapun di console.log, bila tidak di invoke dengan:

```javascript
(function(){
  console.log('Ini adalah IIFEs....')
})();
```

```>>``` Menambahkan argument:

```javascript
(function(name){
  console.log(`Haii... ${name}`)
})('Dyo');
```



```>``` **Function didalam Object**

Pada saat function dimasukan kedalam object di sebut **method**.

```
// Property Method
const todo = {
	add: function(){
		console.log('Add todo..')
	},
	edit: function(id){
		console.log(`Edit todo ${id}`);
	}
}

todo.delete = function(){
	console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

```













