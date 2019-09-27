# # Membuat Web Blog dengan NodeJS



## 16. Refactor Middleware.



Sama seperti sebelumnya semua request dari user kita kelompokan menjadi satu dibawah folder controller, kita juga akan refactor middleware menjadi satu dibawah folder middleware.

```>``` Buat folder baru pada root beri nama "middleware".

``>`` Buat file baru dibawah folder "middleware" beri nama "storePost.js", beri nama sesuai dengan nama kontroller nya, untuk konsistensi pemberian nama file pada project kita.

```>``` Copy middeware pada file index.js dan paste kan pada file middleware > storePost.js:

```javascript
module.exports = (req, res, next) => {
  if (!req.files.image || !req.body.username || !req.body.title || !req.body.description || !req.body.content ) {
      return res.redirect('/posts/new')
  }
  
  next();
}
```

```>``` Kemudian update file index.js middleware menjadi seperti dibawah:

```javascript
// require
const storePost = require('./middlaware/storePost');

app.use('/posts/store', storePost);
```































<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


