# JavaScript Fundamental

## String method

```javascript
const firstName = 'Jokanalay';
const lastName = 'Doe';
const age = 35;
const str = 'Haloo nama saya Jokanajo';
const tags = 'web design,web development, programming, educating';

let val;

val = firstName + lastName;

// Concatenation
val = 'firstName' + ' ' + lastName;

// Append, menambahkan
val = 'Dyo';
val += 'Medio';

val = 'Hallo, nama saya ' + firstName + ' dan saya ' + age; 

// Escaping
val = 'That's awesome, I can't wait';
// solusi 1 gunakan double quote
val = "That's awesome, I can't wait";
// solusi 1 gunakan backslah
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.lenth;

// Concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('h');
val = firstName.lastIndexOf('h');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length -1); // result 

// substring(), mengambil karakter dari depan
val = firstName.substring(0, 4);
val = firstName.slice(0, -3); // mengambil karakter dari belakang

// split(), merubah string menjadi array
val = str.split(' '); 

// replace()
val = str.replace('Jokanajo', 'Jokanalay');

// includes()
val = str.includes('saya'); // jawabannya true 


console.log(val)
```

const firstName = 'John';

const lastName = 'Doe'

