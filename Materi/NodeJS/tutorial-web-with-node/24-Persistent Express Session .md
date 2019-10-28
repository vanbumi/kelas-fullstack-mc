# # Membuat Web Blog dengan NodeJS



## 24. Persistent Express Session.

```>``` Pada saat kita restart server session data akan terhapus, karena session data tersimpan dalam memory browser, kita ingin user tidak kehilangan session data pada saat server di restart. Kita ingin data session bisa bertahan untuk beberapa periode of time, untuk itu kita akan menyimpan session data store di mongodb database.

```>``` Instal ***connect-mongo*** package:

```javascript
npm i --save connect-mongo
```

```>``` Require di index.js

```javascript
const connectMongo = require('connect-mongo');
```

```>``` Register di index.js

```javascript
const mongoStore = connectMongo(expressSession);
```

```>``` Update middleware expressSession menjadi sbb:

```javascript
// middleware express-session
app.use(expressSession({
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection;
  });
}));
```

```>``` Pastikan mongoose.connect(...) berada diatas middleware expressSession ini karena store membutuhkan koneksi pada database.

```>``` Coba untuk login kembali.

```>``` Stop server, dan start server lagi, cek apakah user masih dalam kondisi login cek pada console terminal, seperti dibawah:

```javascript
Session {
  cookie:
   { path: '/',
     _expires: null,
     originalMaxAge: null,
     httpOnly: true },
  userId: '5db41a9a525f973493bd31e8' }
```

```>``` Cek juga pada database mongo pada folder **session** akan ada record tentang informasi session. 

![](/Users/dyo-medio/Desktop/01-KelasFullstack/Materi/NodeJS/tutorial-web-with-node/images/dbSession.png)







<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


