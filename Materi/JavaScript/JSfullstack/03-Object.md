# Object



### Apa itu Object

Contoh:

```javascript
let catName = 'Momo';
let catAge = 4;

function ngeong() {
  alert('Meoooonnnggg')
}

ngeong();
```

Agar kode diatas lebih ter-organisasi, dan menjaga relasi setiap datanya, maka di gunakan object:

```javascript
let cat = {
  name: 'Momo',
  age: 2,
  eyeColor: blue,
  ngeong() {
    alert('Meoooonnnggg')
  }
}
```

Didalam body object kita tidak lagi menggunakan *variable*, melainkan *property* dengan menggunakan *titik dua :* bukan *sama dengan =*.



### Cara meng-akses object

```javascript
// cara panggil property
cat.name
cat.age
cat.eyeColor

// cara panggil function
cat.ngeong();

```

Apabila function berada di dalam object, kita sebut sebagai *method*.

Jadi object memuat *property* dan *method*.



### Object = useful

Kenapa harus menggunakan object? Karena dengan object kita bisa membuat satu *single entity* yang memuat semua data, abiliti atau function. Ter-organisasi dalam satu container  (*Self Content Entity*).



### Object di dalam object

Buat object diatas dan tambahkan object baru sbb:

```javascript
let cat = {
  name: 'Momo',
  age: 2,
  foods: {
    favorite: 'Tuna',
    nonFavorite: 'Kerupuk'
  },
  eyeColor: blue,
  ngeong() {
    alert('Meoooonnnggg')
  }
}
```

Cara memanggil nya:

```javascript
cat.foods.favorite;
```



### Latihan

Well our javascript environment in this case the web browser it brings to the table a bunch of its own pre-built objects.

web browser has pre-built objects that store the data and abilities of the web page and of these different objects. Perhaps one of the most useful is the browsers document object.

But for now all you need to know is that it sort of represents the web page as a whole meaning it's an object that contains all sorts of properties and methods.

In this case if we want to show an alert message anytime someone clicks down here on the page then technically speaking that means we want to be on the lookout for the Click event.

So let's look inside the browser's document object so document DOT and the document object contains a method named ad event listener.

```javascript
document.addEventListener('click', myFunc);

function myFunc() {
  alert('Hello kitta!')
}
```

try codepen: https://codepen.io/vanbumi/pen/QWLpEVv?editors=0010

