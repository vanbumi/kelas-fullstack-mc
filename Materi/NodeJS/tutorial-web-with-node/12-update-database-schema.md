# # Membuat Web Blog dengan NodeJS



## 12. Update Database Schema.



Kita akan menambahkan user field pada post schema.

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

``>`` Hapus database dan input ulang post-post baru, pada mongocompass klik kanan "drop database".

```>``` Update file create.edge, copy control-group title dan paste kan diatasnya untuk menambah username :

```html
<div class="control-group">
  <div class="form-group floating-label-form-group controls">
    <label>Username</label>
		<input type="test" name="username" placeholder="username" class="form-control">
  </div>
</div>
```

```>``` Buka halaman localhost:4000/posts/new, input data post baru.

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



### Menambahkan subtitle

```html
// Menambahkan pada Post model
const PostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  username: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// Pada index.edge
<div class="post-preview">
  <a href="/post/{{ post._id }}">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
  </a>
  <h3 class="post-subtitle">{{ post.subtitle }}</h3>
  <p class="post-meta">Posted by
    <a href="#">{{ post.username }}</a>
    on {{ post.createdAt.toDateString() }}</p>
</div>

// Pada create.edge
<div class="control-group">
  <div class="form-group floating-label-form-group controls">
    <label>Subtitle</label>
    <input type="text" name="subtitle" placeholder="Subtitle" class="form-control">
  </div>
</div>

// Pada post.edge
<div class="post-heading">
  <h1>{{ post.title }}</h1>
  <h2 class="subheading">{{ post.subtitle }}</h2>
  <span class="meta">Posted by
    <a href="#">{{ post.username }}</a>
    on {{ post.createdAt.toDateString() }}}</span>
</div>
```

```>``` Lanjut dengan menghapus database (klik kanan drop database pada robomongo).

```>``` Dan input database baru.













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

