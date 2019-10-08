# JavaScript Fundamental

## Scope

Variables defined outside any function, block, or module scope have global scope.

Variables in global scope can be accessed from everywhere in the application.

```>``` Scope

* Global scope.
* Function scope.

```javascript
// Global scope
var a = 1;
let b = 2;
const c = 3;

function test(){
  var a = 4;
  let b = 5;
	const c = 6;
  
	console.log('Function Scope: ', a, b, c);  
}

test();

console.log('Global Scope: ', a, b, c);
```

hasilnya:

```javascript
Function Scope:  4 5 6
Global Scope	:  1 2 3
```

Kedua nya berada pada scope yang berbeda dan saling tidak mempengaruhi nilai variable yang diberikan.,

tapi bila kita menambahkan If Scope atau yang sering kita sebut **Block Scope**

```javascript
// Global scope
var a = 1;
let b = 2;
const c = 3;

if(true){
  // Block Scope
  var a 	= 4;
  let b 	= 5;
  const c = 6;
  
  console.log('If Sope: ', a, b, c,);
} 

console.log('Global Scope: ', a, b, c);
```

lihat hasilnya:

```javascript
If Sope			 :  4 5 6
Global Scope :  4 2 3
```

hasilnya variable a nilainya ter-update (mutable) dari var a di Global Scope menjadi var a pada If Scope.

Ini adalah kelemahan awal dari Javascript, yang mempengaruhi  yang sekarang dengan ES6 dirubah menjadi **let** dan **const**. Yang berpengaruh pada ***resiko keamanan*** karena programaer akan bingung karena dalam 1 global dan block scope variabelnya saling mempengaruhi.

Coba lagi dengan menambahkan for loop dengan var :

```javascript
// Global scope
var a = 1;
let b = 2;
const c = 3;

// for loop scope
for(var a; a < 10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
```

anda lihat hasilnya var a pada global scope akan ter-update pada for loop scope:

```javascript
Loop: 1
Loop: 2
Loop: 3
Loop: 4
Loop: 5
Loop: 6
Loop: 7
Loop: 8
Loop: 9
Global Scope:  10 2 3
```

Jika anda rubah var dengan let apa yang terjadi?

```javascript
// Global scope
var a = 1;
let b = 2;
const c = 3;

// for loop scope
for(let a; a < 10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
```

hasilnya :

```javascript
Global Scope:  1 2 3
=> undefined
```

undefined, karena var a sudah di assign di global scope, jadi tidak bisa lagi digunakan.