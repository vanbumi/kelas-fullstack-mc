# JavaScript Fundamental

## Variable

```>``` Keyword to define variable:

```
// var, es5 
// let, const, es6, 2015
```

```javascript
var name = 'John Doe';
console.log(name);

// reasign variable var atau let
name = 'Steve Medio';
console.log(name);

// Init variable
var greeting;
console.log(greeting); // will be undefined

// asign variable
var greeting = 'Hai';
console.log(greeting);

// Start with letters, not number, _, $
// Can not start with number

// Multi word var
var firstName = 'John'; // camelCase
var first_name = 'Steve'; // Underscore
var FirstName = 'Tom'; // PascalCase
var firstname = 'Susan'; // all lowercase not recomended
```



```javascript
// Let
let name = 'John Doe';
console.log(name);

// atau
let name;
name = 'John Doe';
console.log(name);

// reasign variable var atau let
name = 'Steve Medio';
console.log(name);

// Const, constant, cannot change, reasign
const name = 'John';
console.log(name);

// Cannot reassign
name = "Santos";

// Have to assign value, Harus diberi nilai
const greeting; // akan error

// Object
const person = {
  name = 'John',
  age = 32
}

// tetap bisa reassign value of object
person.name = 'Santos';
person.age = 30;

// Array
const number = [1,2,3,4,5];
number.push(6);
console.log(number)

// canot do bila dengan const.
const number = [1,2,3,4,5,6];
```