# DOM Events



DOM Event membuat halaman website menjadi lebih interactive.

Contoh:

* Click button.
* Hover link.
* Drag dan drop.
* Press Enter. 
* dll



Cara membuat event adalah dengan men-seleksi sebuah element dan menambahkan ***event listener***, contoh:

```javascript
Listen untuk klik button <button>
Listen untuk hover heading <h1>
Listen untuk text input <input>
```



Cara menggunakan event listener:

```javascript
<button>Klik disini<button>
<p>Sementara belum ada yang klik</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// setup click listener
button.addEventListener("click", function(){
  paragraph.textContent = "Seseorang sudah klik button ini"
});

```

Coba sendiri: https://repl.it/@vanbumi/event-listener-01



**Tugas Latihan**

```>``` Buatlah sebuah halaman dom-demo.html.

```>``` Buatlah isi nya seperti dbawah ini:

``` html
<h1>
	Selamat datang di halaman DOM DEMO  
</h1>

<p>Sisipkan Image kesukaan anda dibawah ini</p>

<p>Buat link ke google</p>
<a href="google.com">Google Link</a>

<p>Buat underlist barang-barang yang anda suka</p>

<ul>
  <li>Sepatu</li>
  <li>Tas</li>
  <li>Jam Tangan</li>
</ul>
```

```>``` Buatlah h1 berubah background warna saat user klik disitu.

**Jawab**

Klik kanan > inspection > console:

```
var h1 = document.querySelector("h1");
undefined

h1
<h1>Selamat datang di halaman DOM DEMO</h1>

h1.addEventListener("click", function(){
	h1.style.background = "yellow";
})
```



