# # Membuat Web Blog dengan NodeJS



## 19. User Model.



```>``` Buat file model baru "User.js" dibawah database > models.

```>``` Update kode nya sbb:

``` javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
```



```>``` Register route di file index.js:

```javascript
app.post('/users/register', storeUserController);
```

```>``` require store User:

``` javascript
const storeUserController = require('./controller/storeUser')
```

```>``` Dibawah folder controllers buat file baru **"storeUser.js"**, update code nya sbb:

```javascript
const User = require('../database/models/User');

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    res.redirect('/');
  });
};
```

```>``` Coba register new user.

















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


