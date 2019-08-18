# # Membuat Web Blog dengan NodeJS



## 10. Membuat Halaman Single Post.



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

```>``` Membuat link title menjadi dinamis:

```javascript
<div class="post-preview">
  <a href="/post/{{ post._id }}">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
	</a>
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

