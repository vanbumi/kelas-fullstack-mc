# # Membuat Web Blog dengan NodeJS



## 11. Update Database Schema.



Kita akan menambahkan beberapa field pada post schema.

```>``` Buka halaman Post.js dan tambahkan field:

``` javascript
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  username: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});
```

``>`` Hapus semua data di dalam database dan input ulang post-post baru.

```>``` Update file create.edge tambahkan label dan input untuk username.

```html
<label>Username</label>
<input type="test" name="username" placeholder="username" class="form-control">
```

```>``` Masukan data post baru.

```>``` Lihat hasilnya di halaman index.

```>``` Kembali ke index.edge, update post username dan tanggal waktu post:

```html
<a href="#">{{ post.username }}</a>
on {{ post.createdAt.toDateString() }}
```

```>``` Update juga pada halaman single artikel pada file post.edge

```>``` Dan juga contentnya:

```javascript
{{ post.content }}
```

















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

