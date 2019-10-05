# JavaScript Fundamental

## Tipe Data (Data Type)

### Primitive

1. String, contoh: Karakter, Huruf, Abjad, Kata, Kalimat.
2. Number, contoh: Integer, Decimal, Float. 
3. Boolean, contoh: true atau false.
4. Null, contoh: empty value.
5. Undefined, contoh: variable yang tidak diberi nilai, not assign of value, all variable are undefined by default.
6. Symbol (ES6)



### Reference Data Type

1. Array
2. Object Literals
3. Function
4. Date
5. Dll...



```>``` Buat di Code editor:

```javascript
// PRIMITIVE

// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 20;
console.log(typeof age);

// Boolean
const isAwesome = true;
console.log(typeof isAwesome);

// Null
const bike = null;
console.log(typeof bike); // hasilnya object, ini adalah bug nya JS, cek dengan googling "typeof null is object"

// Undefined
let test;
console.log(typeof test);

// Symbol is new primitive type
const sym = Symbol();
console.log(typeof sym);


// TIPE REFERENCE - Object

// Array
const hobbies = ['movies', 'music', 'bike'];
console.log(typeof hobbies);

// Object literal
const address = {
  jalan: 'Kemiri',
  kota: 'Cirebon',
  profinsi: 'Jabar'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);















```











```javascript

```