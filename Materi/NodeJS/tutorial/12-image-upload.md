# # Membuat Web Blog dengan NodeJS



## 12. Image Upload with Express.



Kita akan memuat upload image untuk masing-masing post dengan Express.

```>``` Install express-fileupload:

```
npm i express-fileupload --save
```

```>``` Require pada file index.js

```javascript
const fileUpload = require('express-fileupload')
```

```>``` Setup middleware:

```javascript
app.use(fileUpload());
```

```>``` Update form post dengan menambahkan form input untuk image:

```html
<div class="form-group mt-5">
  <input type="file" name="image" class="form-control-file">
</div>
```

```>``` Update enctype pada form element:

```html
<form enctype="multipart/form-data">
  
</form>
```

```>``` Kemudian update route post pada file index.js:

```javascript
app.post("/posts/store", (req, res) => {
  const { image } = req.files;
  
  image.mv(path.join(__dirname, 'public/posts', image.name), (error) => {
    Post.create(req.body, (error, post) => {
      res.redirect('/')
    });
  });
});
```

```>``` Buatlah post baru dan upload image.

```>``` Cek hasilnya pada direktori public > posts > apakah image berhasil di upload?

























<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

