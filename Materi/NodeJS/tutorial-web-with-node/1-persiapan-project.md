# # Membuat Web Blog dengan NodeJS



## 1. Persiapan Project



```>``` Buat folder project : { bloger-node }.

```>``` Download template bootstrap: https://startbootstrap.com/themes/clean-blog/

```>``` Buat folder baru di bawah folder root project beri nama "ui".

```>``` Tempatkan template yang sudah di unzip dibawah folder ui, **paste konten nya saja tanpa folder nya**.

```>``` Buka Terminal dan arahkan ke folder project, dan instal node js dengan perintah:

```
npm init -y
```

```>``` Install express

```
npm i express --save
```

```>``` Buat file baru pada root folder "index.js", kemudian update file nya sbb;

```javascript
const express = require('express');
const app = express();

// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
});
```

```>``` Jalankan server pada Terminal:

```
node index.js
```

```>``` Install nodemon:

```
npm i nodemon --save-dev
```

```>``` Update file package.json, pada **scripts** sbb:

```javascript
"scripts": {
  "start": "nodemon index.js"
}
```

```>``` Mulai saat ini start server dengan perintah:

```
npm start
```



Source code: https://github.com/vanbumi/bloger-node/tree/01













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com