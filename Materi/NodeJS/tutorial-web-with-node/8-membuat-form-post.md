# # Membuat Web Blog dengan NodeJS



## 8. Membuat Form Post.



Agar user bisa mengirimkan post ke dalam website, user membutuhkan halaman view yang berisi form sehigga user bisa meng-input data.

```>``` Dibawah folder **views** buat file baru "create.edge", update file create.edge sbb:

```javascript
@layout('layouts.app')

@section('content')
<!-- Page Header -->
<header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="page-heading">
          <h1>New Post</h1>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <form action="/posts/store" method="POST">
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" class="form-control">
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Subtitle</label>
            <input type="text" name="subtitle" placeholder="Subtitle" class="form-control">
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Content</label>
            <textarea id="content" name="content" placeholder="Content ..." cols="30" rows="10" class="form-control"></textarea>
          </div>
        </div>
       
        <div class="form-group my-4 text-center">
          <button class="btn btn-primary">Create Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
@endsection
```

```>``` Pada halaman index buat route baru untuk halaman create ini:

```javascript
app.get('/posts/new', (req, res) => {
  res.render('create')
});
```

```>``` Pada file app.edge buatlah link menu baru pada nav, letakkan disamping Home:

```html
<li class="nav-item">
	<a class="nav-link" href="/posts/new">New Post</a>
</li>
```



```>``` Lihat hasilnya pada browser localhost:4000 dan klik menu "new post" apa yang terjadi? 

Bila ada error itu karena link menuju assest vendor dan lainnya tidak bisa terbaca, untuk itu tambahkan "**/**" pada setiap link assets pada halaman app.edge:

```javascript
/vendor/...
/css/...
/js/...
```

```>``` Refresh halaman **localhost:4000/posts/new**.



```>``` Source code: https://github.com/vanbumi/bloger-node/tree/08













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

