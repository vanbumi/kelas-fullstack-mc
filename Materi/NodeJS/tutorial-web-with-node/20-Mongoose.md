# # Membuat Web Blog dengan NodeJS



## 20. Mongoose.

reference: https://medium.com/@justinmanalad/pre-save-hooks-in-mongoose-js-cf1c0959dba2



```>``` Kita akan encrypted user password sebelum di simpan kedalam database, dengan alasan keamanan. Kita akan menggunakan **Mongoose Model Hooks** untuk melakukan encrypsi. Mongoose Model Hooks semacam middleware.

```>``` Install bcrypt:

```javascript
npm i --save bcrypt
```

```>``` Require di file User.js:

```javascript
const bcrypt = require('bcrypt');
```

```>``` Tambahkan baris kode ini di file User.js letakan dibawah UserSchema block:

``` javascript
UserSchema.pre('save', function(next) {
  const user = this;
  
  bcrypt.hash(user.password.10.function(error, encrypted) {
    user.password = encrypted;
    
    next();
  });
});
```

```>``` Coba register new user lagi, password harus nya sudah di encrypted dengan hash.





























<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


