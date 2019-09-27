# # Membuat Web Blog dengan NodeJS



## 5. Membuat Layout.



Sekarang kita akan membuat layout dengan menggunakan template engine.

```>``` Buat file baru "app.edge" dibawah folder views > layouts.

```>``` Buka file pages > index.html, copy semua content nya dan paste kan di file app.edge.

```>``` Pada file app.edge hapus bagian page-header dan main-content nya saja. 

```>``` Pada file app.edge antara header dan footer buat kode seperti ini:

```javascript
@!section('content')
```

```>``` Kembali ke file index.edge hapus semua content, dan update dengan kode sbb:

```javascript
@layout('layouts.app')

@section('content')

@endsection
```

```>``` Copy content dari index.html dan Paste kan dibawah kode ```@section('content')```.

```>``` Lakukan juga pada about.edge, post.edge dan contact.edge

```>``` Lihat hasilnya di browser localhost:4000, localhost:4000/about, localhost:4000/post, localhost:4000/contact.

```>``` Rubah nama web nya menjadi nama web anda.

``>`` Rubah title dari masing2 halaman, seperti nama halaman. 

















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

