# # Membuat Web Blog dengan NodeJS



## 8. Membuat Post Request.



Agar user bisa mengirimkan data melalui form ke dalam database, kita harus membuat post request.

```>``` Pada file index.js buatlah route baru dengan method POST:

```javascript
app.post('/posts/store', (req, res) => {
  // melakukan penyimpanan
  Post.create(req.body, (error, post) => {
    res.redirect('/')
  });
});
```

```>``` Agar bisa melakukan penyimpanan diatas pada database kita harus me-require post model pada halaman index.js ini:

```javascript
const Post = require('./database/models/Post');
```

```>``` Agar data pada input form dapat disimpan ke dalam database kita membutuhkan package body-parser, untuk itu kita harus menginstal nya:

```
npm i body-parser --save
```

```>``` Pada file index.js, require body-parser:

```
const bodyParser = require('body-parser');
```

```>``` Masih pada file index.js, setup body-parser sbb:

```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

```>``` Lihat hasil nya pada browser localhost:4000/posts/new dan isi form nya dan klik create post buton.

```>``` Lihat hasil post pada robo mongo atau mongo compass.













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

