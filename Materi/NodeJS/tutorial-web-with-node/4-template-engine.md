# # Membuat Web Blog dengan NodeJS



## 4. Setup Template Engine.



Kali ini kita akan menggunakan template engine **Edge**: https://edge.adonisjs.com/ .

Karena kita menggunakan **Framework Express** agar lebih spesifik kita akan menggunakan template engine **Edge ExpressJS**, silahkan lihat di url : https://github.com/ecrmnn/express-edge.

 

```>``` Instal template edge:

```
npm install express-edge --save
```

```>``` Pada file index.js require expressEdge js:

```javascript
const { config, engine } = require('express-edge');
```

```>``` Kemudian setup dengan middleware dibawah statik folder:

```javascript
app.use(engine);
app.set('views', `${__dirname}/views`);
```

```>``` Buat directory baru pada root "views".

```>``` Buat file baru dibawah folder "views" beri nama **index.edge**.

```>``` Buat file baru dibawah folder "views" beri nama **about.edge**.

```>``` Buat file baru dibawah folder "views" beri nama **post.edge**.

```>``` Buat file baru dibawah folder "views" beri nama **contact.edge**.



```>``` Copy content file ***index.html*** dibawah folder pages dan paste kan ke file ***index.edge***.

```>``` Lakukan juga hal yang sama dengan file **about.html**, **post.html** dan **contact.html**.



```>``` Pada file index.js, update route nya, tidak lagi menggunakan ```res.sendFile(path.resolve(__dirname, 'pages/... .html')```:

``` javascript
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/post', (req, res) => {
  res.render('post')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});
```



```>``` Coba hasilnya di browser:

http://localhost:4000, 

http://localhost:4000/about, 

http://localhost:4000/post dan 

http://localhost:4000/contact



```>``` Source code: https://github.com/vanbumi/bloger-node/tree/04

















<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

