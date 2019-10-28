# # Membuat Web Blog dengan NodeJS



## 18. User Registration.



Kita akan membuat user bisa registrasi di web blog kita, untuk proses registrasi kita membutuhkan:

```1.``` Model.

```2.``` View.

```3.``` Controller.



```>``` Pada folder views buat file baru "register.edge". 

```>``` Copy konten dari file "create.edge" paste di file "register.edge", dan update sbb:

```javascript
@layout('layouts.app');


@section('content');
<!-- Page Header -->
<header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="page-heading">
          <h1>Create New Account</h1>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      
      <form action="/users/register" method="POST" encType="multipart/form-data">
        
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" class="form-control">
          </div>
        </div>

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
          <button class="btn btn-primary">Register now</button>
        </div>
      </form>

    </div>
  </div>
</div>

@endsection
```

 

```>``` Buat file baru "createUser.js" dibawah folder "controllers", update dengan kode sbb:

```javascript
module.exports = (req, res) => {
  res.render('register')
}
```

  

```>``` Update file index.js sbb:

``` javascript
const createUserController = require('./controllers/createUser');
```

  ```>``` Register route:

``` javascript
app.get('/auth/register', createUserController);
```



```>``` Update file app.edge dan tambahkan menu link dibawah Contact:

```javascript
<li class="nav-item">
  <a class="nav-link" href="auth/register">Register</a>
</li>
```



```>``` Lihat hasilnya di browser localhost:4000/auth/register.

```>``` Coba klik link menu "register".

```>``` Coba untuk mengganti background image halaman register.



















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


