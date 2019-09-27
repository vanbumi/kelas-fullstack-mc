# # Membuat Web Blog dengan NodeJS



## 15. Me-refactor Kode MVC.



Untuk membuat aplikasi kode lebih rapih dan ter-organisasi dengan baik, kita akan me-refactor kode sesuai dengan kaidah dan patern MVC (Model, View, Controller).

```>``` Pada direktori root buat folder baru "controllers".

>  **controller disini berfungsi untuk handle request dari user**.

```>``` Dibawah folder controllers buat file baru "createPost.js", dan isikan kode sbb:

```javascript
module.exports = (req, res) => {
  
};
```

```>``` Pada halaman **index.js** update dengan me-require halaman createPost.js diatas:

```javascript
const createPostController = require('./controllers/createPost');
```

```>``` Kemudian update route new post sbb:

```javascript
app.get('/posts/new', createPostController);
```

```>``` Update file **createPost** sbb:

```javascript
module.exports = (req, res) => {
  res.render("create");
};
```

```>``` Lihat hasil nya pada browser posts/new



```>``` Lakukan juga pada home page!

```>``` Buat file baru dibawah folder controller beri nama "homePage", tambahkan kode nya sbb:

```javascript
const Post = require('../database/models/Post');

module.exports = async (req, res) => {
  const posts = await Post.find({});
  
  res.render("index", {
    posts
  });
};
```

```>``` Kembali ke index.js, update:

```javascript
const homePageController = require('./controllers/homePage');

// update route nya
app.get('/', homePageController);
```

```>``` Lihat hasilnya di localhost:4000



```>``` Lanjut dengan request store post.

```>``` Buat file baru "storePost.js" dibawah folder "controllers",  seperti biasa tambahkan kode:

```javascript
const Post = require('../database/models/Post');
const path = require('path');

module.exports = (req, res) => {
  const { image } = req.files;
  
  image.mv(path.join(__dirname, '..', 'public/posts', image.name), (error) => {
    Post.create({
      ...req.body,
      image: '/posts/${image.name}'
    }, (error, post) => {
      res.redirect('/')
    });
  });
}
```

```>``` Pada file index.html, update kode nya sbb:

```javascript
const storePostController = require('./controllers/storePost');

// update route menjadi
app.post('posts/store', storePostController);

```



```>``` Lakukan juga pada get Post.

```>``` Buat file baru "getPost.js" dibawah folder "controllers".

```>``` Tambahkan kode pada getPost.js file:

```javascript
const Post = require('../database/models/Post');

module.exports = (req, res) => {
  const post = await Post.findById(req.params.id)
  
  res.render('post', {
    post
  });
}; 
```

```>``` Pada halaman index.js update sbb:

```javascript
const getPostController = require('./controllers/getPost');

// update route nya
app.get('/post/:id', getPostController);
```

















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


