# JavaScript Fundamental

## Tipe Conversion

Type Conversion adalah menentukan variable merubah tipe datanya, contoh penerapanya adalah saat anda membuat user input dari form dan disimpan kedalam sebuah variable akan disimpan sebagai String secara default, jika ingin melakukan kalkulasi maka harus di ubah tipe datanya menjadi tipe number.

```>``` Buka di kode editor, buatlah kode2 dibawah ini:

```javascript
let val;

// Number to string
val = 5;

// output
console.log(val);
console.log(typeof val);
console.log(val.length); // hasilnya akan error karena property length untuk mengetahui jumlah karakter yang hanya bekerja pada tipe data string.

// conversion number to string
val = String(5);
val = String(5+5);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();


// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null); // result is 0
val = Number('hello'); // result NaN
val = Number([1,2,3]); // result NaN

// parseInt()
val = parseInt('100'); // result 100

// parseFloat()
val = parseFloat('100.38'); // result 100.3

// output
console.log(val);
console.log(typeof val);
console.log(val.toFix());

// Type Coersion
const val1 = 5;
const val2 = 6;
const sum = val1 + val2

console.log(sum);
console.log(typeof sum);

// rubah
const val1 = String(5); // hasilnya 56 string

```

