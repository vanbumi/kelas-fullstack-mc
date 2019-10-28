# # Membuat Web Blog dengan NodeJS



## 22. User Login

```>``` Buat file baru "login.edge" dibawah folder views.

```>``` Copy isi dari file register.edge dan paste di login.edge dan lakukan penyesuaian sbb:

``` javascript
@layout('layouts.app')

@section('content')
<!-- Page Header -->
<header class="masthead"
  style="background-image: url('https://www.topbusinessjournal.com/wp-content/uploads/2016/08/Registering-Business-company.jpg')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="page-heading">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <form action="/users/login" method="POST" enctype="multipart/form-data">
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" class="form-control">
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" class="form-control">
          </div>
        </div>

        <div class="form-group my-4 text-center">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
@endsection
```



```>``` Buat file controller baru "login.js", buat baris code nya sbb:

```javascript
module.exports = (req, res) => {
  res.render('login')
};
```

```>``` Require file tsb di index.js:

```javascript
const loginController = require('./controllers/login');
```

```>``` Register new route masih di index.js

```javascript
app.get('/auth/login', loginController);
```

```>``` Tambah kan link di top menu halaman utama (app.edge), letakan di sebelah register:

```html
<li class="nav-item">
  <a class="nav-link" href="/auth/login">Login</a>
</li>
```

```>``` Coba hasil nya di browser.

```>``` Buat file controller baru untuk menangani POST request dari form login beri nama: "loginUser.js".

```>``` Buat baris kode pada file diatas sbb:

```javascript
// require user model
const User = require('../database/models/User');
// require bycrypt
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const { email, password } = req.body;

  // try to find user
  User.findOne({ email }, (error, user) => {
    if (user) {
      // compare user password
      bcrypt.compare(password, user.password, (error, same) => {
        // if user password correct, then login user
        if (same) {
          // store user session
					req.session.userId = user._id;
          
          res.redirect('/')
        } else {
          res.redirect('/auth/login');
        }
      })
    } else {
      return res.redirect('/auth/login');
    }
  });
};

```

```>``` Require loginUser di file index.js:

```javascript
const loginUserController = require('./controllers/loginUser');
```

```>``` Register route loginUser di file index.js, untuk menangani url form action login:

```javascript
app.post('/users/login', loginUserController);
```

```>``` Coba test di browser coba login user.







<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


