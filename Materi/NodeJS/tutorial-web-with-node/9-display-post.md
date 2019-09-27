# # Membuat Web Blog dengan NodeJS



## 9. Display Post.



Kita akan membuat view untuk men-display post yang sudah di buat oleh user.

```>``` Update route index pada halaman index.js dan gunakan asynchronous javascript agar lebih elegan:

```javascript
app.get('/', async (req, res) => {
	const posts = await Post.find({});
	
	res.render('index', {
		// posts: posts
		posts
	});
});
```



### Cara membuat dynamic data dengan edge template engine.

```>``` Judul-judul post akan tempatkan di halaman index, jadi buka halaman index.edge.

```>``` Pada main konten gunakan looping edge template engine dengan layout html post yang ada: 

```javascript
@each(post in posts)
	{{ post.title }}
@endeach
```

menjadi:

```html
<div class="col-lg-8 col-md-10 mx-auto">
  @each(post in posts)
  	<div class="post-preview">
      <a href="post.html">
      	<h2 class="post-title">
          {{ post.title }}
        </h2>
      </a>
      
      <p class="post-meta">Post by
        <a href="#">Start Bootstrap</a>
        on September 24, 2018
      </p>
  	</div>
		
	@endeach
</div>
```



```>``` Lihat hasil nya refresh browser localhost:4000.

```>``` Tambahkan beberapa post lagi dan lihat hasilnya lagi pada browser.













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

