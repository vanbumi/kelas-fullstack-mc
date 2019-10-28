# # Membuat Web Blog dengan NodeJS



## 11. Membuat Halaman Single Post.



Setiap post harus memiliki halaman masing-masing, masing-masing post memilik URL dan memiliki halaman display masing-masing.

```>``` Pada halaman index.js, update route get post menjadi sbb:

```javascript
app.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  
  res.render('post', {
    post
  });
});
```

```>``` Membuat link title menjadi dinamis, pada halaman index.edge, update kode nya menjadi sbb:

```javascript
<div class="post-preview">
  <a href="/post/{{ post._id }}">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
	</a>
```

```>``` Buka file post.edge ganti judul post:

```html
<div class="post-heading">
  <h1>Man must explore, and this is exploration at its greatest</h1>
  <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
  <span class="meta">Posted by
  <a href="#">Start Bootstrap</a>
  on August 24, 2019</span>
</div>
```

menjadi:

```html
<div class="post-heading">
  <h1>{{ post.title }}</h1>
  <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
  <span class="meta">Posted by
  <a href="#">Start Bootstrap</a>
  on August 24, 2019</span>
</div>
```

```>``` Rubah juga untuk content nya:

```html
<div class="col-lg-8 col-md-10 mx-auto">
	<p>{{ post.content }}</p>
  
```

```>``` Lihat hasilnya dan klik title post, semestinya langsung menuju post yang bersangkutan.





























<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

