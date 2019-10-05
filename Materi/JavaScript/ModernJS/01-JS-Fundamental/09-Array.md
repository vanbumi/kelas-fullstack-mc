# JavaScript Fundamental

## Array

Array dalam programing digunakan untuk menyimpan multiple value/data dalam satu buah variable.

Data Array dapat di mutable dan iterate (loops).

Array dapat digunakan untuk membuat komplek algoritma.

```javascript
// Create array

const numbers  = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit    = ['Apple', 'Banana', 'Orange', 'Pear'];
const campuran = [22,'Hello',true,undefined,null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index of value, mencari nomor index dari member array.
val = numbers.indexOf(36);

/** MUTATING ARRAYS */
// menambahkan array di akhir 
numbers.push(250);
// menambahkan array di awal
numbers.unshift(120);
// menghapus array di akhir
numbers.pop();
// menghapus array di awal
numbers.shift();
// splice value
numbers.splice(1,3) // menghapus dari index pertama hingga index ke 3
// reverse
numbers.reverse();

// Concate array
val = numbers.concate(numbers2) // menggabungkan 2 buah array

// Sorting array
val = fruit.sort();
val = number.sort(); // sortir hanya angka depannya saja, kita mau semua angka

// Menggunakan "compare function"
val = number.sort(function(x,y){
  return x - y
});

// Reverse sort menggunakan "compare function"
val = number.sort(function(x,y){
  return y - x
});




console.log(numbers);
console.log(val);
```