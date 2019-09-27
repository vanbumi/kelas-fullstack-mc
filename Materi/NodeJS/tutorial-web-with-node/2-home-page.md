# # Membuat Web Blog dengan NodeJS



## 2. Setup Home Page



```>``` Update file index.js, tambahkan setelah baris ```const app = express();```

```javascript
// create static page
app.use(express.static('public'));
```

```>``` Buat folder baru "ui" pada root "public".

```>``` Buat folder baru pada root "pages".

```>``` Buat file baru "index.html" dibawah direktori "pages".

```>``` Membuat route halaman index.js:

```
// tambahkan require "path"
const path = require("path");

// create route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/index.html'));
});
```

```>``` Copy content dari file index.htm pada folder "ui" dan paste kan pada file index.html pada folder pages.

```>``` Copy folder "vendor" pada folder "ui" dan paste kan dibawah folder "public".

```>``` Copy folder "css" pada folder "ui" dan paste kan dibawah folder "public".

```>``` Copy folder "img" pada folder "ui" dan paste kan dibawah folder "public". 

```>``` Copy folder "js" pada folder "ui" dan paste kan dibawah folder "public".

```>``` Lihat hasil nya buka browser localhost:4000.



Source code: https://github.com/vanbumi/bloger-node/tree/02











<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

