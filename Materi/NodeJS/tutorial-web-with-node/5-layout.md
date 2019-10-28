# # Membuat Web Blog dengan NodeJS



## 5. Membuat Layout.



Sekarang kita akan membuat layout dengan menggunakan template engine.

```>``` Buat folder baru dibawah folder **views**, beri nama:  "**layouts**".

```>``` Buat file baru "**app.edge**" dibawah folder views > layouts.

```>``` Buka file **pages > index.html**, copy semua content nya dan paste kan di file **app.edge**.

```>``` Pada file app.edge hapus bagian (section) ***page-header*** dan ***main-content***. 

```>``` Masih pada file app.edge antara header dan footer buat kode seperti ini:

```javascript
@!section('content')
```



```>``` Kembali ke file index.edge hapus semua content, dan update dengan kode sbb:

```javascript
@layout('layouts.app')

@section('content')

@endsection
```

```>``` Lakukan test dengan menuliskan ini dibawah @section('content'):

```javascript
@section('content')

<h1>Index page</h1>
```

```>``` Lihat hasilnya pada browser. Navbar dan footer masih di render di halaman tsb, cek juga dengan klik kanan > inspection.



```>``` Copy isi dari index.html dan Paste kan dibawah kode ```@section('content')``` pada file index.edge.

```>``` Lakukan juga hal yang sama pada halaman ***about.edge***, ***post.edge*** dan ***contact.edge***.



```>``` Lihat hasilnya di browser **localhost:4000**, **localhost:4000/about**, **localhost:4000/post**, **localhost:4000/contact**.

```>``` Rubah nama web nya menjadi nama web anda.

``>`` Rubah title dari masing2 halaman, seperti nama halaman, contoh:

```javascript
// Pada route index.js
app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Project Blog'
  });
});

// Pada heading index.edge
<div class="site-heading">
  <h1>{{ pageTitle }}</h1>
	<span class="subheading">A Blog Theme by Start Bootstrap</span>
</div>
```

```>``` Lakukan di semua halaman ya.

```>``` Coba hasil nya di setiap halaman pada browser.



```>``` Source code: https://github.com/vanbumi/bloger-node/tree/05







<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

