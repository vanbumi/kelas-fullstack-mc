# # Membuat Web Blog dengan NodeJS



## 13. Menyimpan Image kedalam Database.



Untuk menyimpan image kedalam database, kita harus menambahkan field image baru kedalam schema post.

```>``` Buka file Post.js tambahkan field image dibawah field username :

```javascript
image: String,
```

```>``` Pada file index.js, customize rouet app.post sbb:

```javascript
app.post("/posts/store", (req, res) => {
  const { image } = req.files;
  
  image.mv(path.join(__dirname, 'public/posts', image.name), (error) => {
    Post.create({
      ...req.body,
      image: '/posts/${image.name}'
    }, (error, post) => {
      res.redirect('/')
    });
  });
});
```

```>``` Delete database, refresh web, kemudian buat post baru lagi.

```>``` Pada file post.edge, kita ingin tampilkan image yang baru saja di upload disini:

```html
<header class="masthead" style="background-image: url('{{ post.image }}')"
```

```>``` Lihat hasilnya dengan klik title post, artikel pada halaman single dengan image di bagian header.





<br>

<br>

<br>

<br>

<br>

<br>

<hr>
**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com

