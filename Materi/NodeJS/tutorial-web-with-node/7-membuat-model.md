# # Membuat Web Blog dengan NodeJS



## 7. Membuat POST Model.



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



```>``` Source code: https://github.com/vanbumi/bloger-node/tree/07











<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

