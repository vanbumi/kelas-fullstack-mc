# # Membuat Web Blog dengan NodeJS



## 15. Menambahkan Validation Middleware.

bugs found!!!!!

Pada form isian kita harus menambahkan validation, sebagai kontrol kepada user agar dalam input data sesuai dengan yang kita inginkan, untuk mencegah hal-hal yang tidak diinginkan.

```>``` Tambahkan custom middleware dibawah app.use … file index.js :

```javascript
const validateCreatePostMiddleware = (req, res, next) => {
  if (!req.files.image || !req.body.username || !req.body.title || !req.body.description || !req.body.content ) {
      return res.redirect('/posts/new')
  }
  
  next();
};

app.use('/posts/store', validateCreatePostMiddleware);
```

```>``` Hapus database dan masukan lagi post baru, coba kosong salah satu form.



















<br>

<br>

<br>

<br>

<br>

<br>

<hr>
**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com

