# # Membuat Web Blog dengan NodeJS



## 6. Mongoose.



```>``` Kita harus install mongoose untuk meng-koneksikan antara nodejs dan mongodb.

```
npm i mongoose --save
```

```>``` Pada file index.js require mongoose:

```
const mongoose = require('mongoose');
```

```>``` Tambahkan string kode koneksi dibawah nya:

```
mongoose.connect('mongodb://localhost/node-blog-db')
```

```>``` Buat folder baru pada root "database".

```>``` Buat folder baru dibawah folder "database" beri nama "models".

```>``` Buat file baru dibawah folder "models" beri nama "Post.js".

```>``` Update file Post.js sbb:

```javascript
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
```















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

