# # Membuat Web Blog dengan NodeJS



## 23. Express Session.

Kita akan menggunakan Session, session adalah mekanisme untuk menyimpan informasi pada browser user. 

Dan setiap saat mereka melakukan request, informasi tersebut dikirimkan kembali ke mereka dari server.

Kemudian kita dapat men-decrypt informasi yang user request.

Dan informasi tersebut di simpan di user browser dan disebut sebagai "**cookies**".



```>``` install Express Session sbb:

```javascript
npm i --save express-session
```

```>``` Require express session di index.js:

``` javascript
const expressSession = require('express-session');
```

```>``` Register sebagai middleware di index.js dibawah const app = express()

```javascript
app.use(expressSession({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// ref: https://www.npmjs.com/package/express-session
```

```>``` Untuk membuktikan session buka browser localhost:4000.

```>``` Klik kanan.

```>``` Klik **Application** tab.

```>``` Klik Cookies pada kolom Storage.

```>``` Klik domain web kita.

```>``` Anda dapat melihat kolom-kolom informasi data cookies disitu al: Name, Value dsb. Pada kolom Value berisi pertukaran informasi yang berasal dari server sesuai dengan user request disimpan disitu. 

```>``` Buka halaman loginUser.js, update kode dibawah comment ```//store user session``` sbb:

```javascript
bcrypt.compare(password, user.password, (error, same) => {
  // if user password correct, then login user
  if (same) {
    console.log("berhasil login? " + same);

    // store user session
    req.session.userId = user._id;
    
    ...
```

```>``` Untuk test console buka file controller >  **homePage.js**, kita tambahkan console.log sbb:

```javascript
module.exports = async (req, res) => {
  const posts = await Post.find({});
  
  // tambahkan console.log
  console.log(req.session)

  res.render("index", {
    posts
  });
};
```

```>``` Refresh halaman home dan lihat console di Terminal, berisi :

```javascript
Session {
  cookie:
  { path: '/',
     _expires: null,
     originalMaxAge: null,
     httpOnly: true,
     secure: true } 
	}
```

```>``` Kemudian coba login kembali dan cek lagi console.log, maka akan ada data ***userId: xxx***, user id inilah yang akan di keep oleh browser dan di share apabila user tersebut login atau tidak login:

```javascript
Session {
  cookie:
   { path: '/',
     _expires: null,
     originalMaxAge: null,
     httpOnly: true },
  userId: '5db41a9a525f973493bd31e8' }
```

```>``` Apabila browser kita refresh kembali maka cek di console.log maka user Id masih di keep pada request kedua dst.

```>``` Pada kasus user ingin membuat Post baru sbb:

```>``` Buka file createPost Controller, dan update code nya disini kita akan melewatkan user Id pada req.session jadi apabila user login maka akan di direct ke form post, bila tidak maka akan diminta login dan di direct ke halaman login:

```javascript
module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("create")
  }
  
  res.redirect('/auth/login');
};
```

```>``` Coba klik link menu create new post, maka apabila user belum login maka akan di direct ke halaman login.

```>``` Coba login dan klik lagi link create new post, maka akan di direct ke form new post.









<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


