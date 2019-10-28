# # Membuat Web Blog dengan NodeJS



## 3. Setup About Page



```>``` Buat file baru "about.html" dibawah folder "pages". 

```>``` Copy content dari file **about.html** pada folder "ui" dan paste kan pada file **about.html** dibawah folder pages.

```>``` Pada halaman index.js buat route baru untuk halaman about.html :

```javascript
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "pages/about.html"))
});
```

```>``` Lihat hasil nya pada browser localhost:4000/about.



```>``` Lakukan hal yang sama pada post.html dan contact.html, tambahkan juga route baru untuk halaman "post" dan "contact" tersebut:

``` javascript
app.get('/post', (req, res) => {
  res.sendFile(path.join(__dirname, "pages/post.html"))
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "pages/contact.html"))
});
```



```>``` Buat file baru "post.html" dibawah folder "pages".

```>``` Buat file baru "contact.html" dibawah folder "pages" 

```>``` Copy content dari file post.html pada folder "ui" dan paste kan pada file post.html dibawah folder pages.

```>``` Copy content dari file contact.html pada folder "ui" dan paste kan pada file contact.html dibawah folder pages.



```>``` Coba hasilnya di browser:

http://localhost:4000, 

http://localhost:4000/about, 

http://localhost:4000/post dan 

http://localhost:4000/contact



```>``` Source code: https://github.com/vanbumi/bloger-node/tree/03













<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. <br> mediocademy.com

