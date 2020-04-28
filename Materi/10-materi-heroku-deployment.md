## Cara deploy web statis ke heroku

### Steps

```>``` Install git:

	git init



```>``` Buat akun di heroku.com, [Signup](https://signup.heroku.com/). 	

```>``` Download Heroku Toolbelt, [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

```>``` Jalankan heroku login dari Terminal:

	heroku login



```>``` Pindah ke folder Projects anda dan buat file baru **index.php**, dan tulis kode dibawah:

	<?php header( 'Location: /index.html' ) ; ?>



```>``` Lanjut Git command:

	git status
	git add .
	git commit -m "My site ready for heroku deployment." 	
	heroku apps:create <nama_app_kamu>
	git push heroku master

Setelah di push hasilnya seperti dibawah ini:

	“remote: Verifying deploy…. done.” 

Lanjut dengan membuka web dari Terminal:

	heroku open



Example hasil deploy: 

* https://webstat.herokuapp.com
* https://node-webapp-yk.herokuapp.com/

<br><br>



## Deploy Heroku with Node js

### Cara 1:

​	reff: https://appdividend.com/2018/04/14/how-to-deploy-nodejs-app-to-heroku/



```>``` Create .gitignore dan tambahkan:

```javascript
/node_modules
npm-debug.log
.DS_Store
/.env
```

```>``` Update file package.json script sbb:

```javascript
"scripts": {
  "start": "nodemon index.js"
},
```

atau tergantung dari main file anda:

```javascript
"scripts": {
   "start": "nodemon server.js"
},
```

```>``` Create file Procfile pada folder root, kemudian update sbb;

```javascript
// Procfile
web: node index.js

// atau tergantung main file anda
web: node server.js
```

```>``` Login ke Heroku dari Terminal

```
heroku login
```

```>``` Deploy ke Heroku:

```
heroku apps:create nama_app_kamu 
```

```>``` Git

```
git status
git add .
git commmit -m "ready deploy to heroku"
```

```
git push heroku master
```

```
heroku open
```

```>``` Apabila ada error .... lakukan **Heroku logs**

```
heroku logs
```

```>``` You can also verify by this command to check that our application is up and running.

```
heroku ps:scale web=1
```

```>``` You can also run on the local using the following command.

```
heroku local web
```







<br>

###  Cara 2:

Tambahkan file dan folder:

```javascript
- public/
----- css/
---------- style.css
- views/
---------- index.ejs
- .gitignore
- package.json
- server.js
```



Update file package.json seperti dibawah:

```javascript
{
  "name": "heroku-node",
  "description": "Our sample Node to Heroku app",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "ejs": "~1.0.0",
    "express": "~4.9.8"
  }
}
```



Install ejs dan express

```
npm i express ejs --save
```



update file server.js

```javascript
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
```



update file views/index.ejs

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Node Sample App</title>

    <!-- CSS -->
    <!-- load bootstrap and our own personal stylesheet -->
    <link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/superhero/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

<div class="container">
    <div class="jumbotron">
        <h1>This Is Heroku Awesome!</h1>
        <p>This is the sample of a tutorial on <a href="https://scotch.io">scotch.io</a></p>
        <a href="https://scotch.io/tutorials/" class="btn btn-primary btn-lg">View the Tutorial</a>
    </div>
</div>

</body>
</html>
```



Update style pada file public/css/style.css

```css
body    { padding-top:50px; }
.container .jumbotron    { border-radius:40px; }
```



Test 

```
node server.js
```



Buka browser: http://localhost:8080



### Deploy

**PERHATIAN!!!**

**LAKUKAN PERINTAH NOMOR 1 BILA SEBELUMNYA ANDA BELUM MEMBUAT REMOTE REPOSITORY! BILA SUDAH PERNAH BUAT, LANGSUNG LOMPAT KE PERINTAH NOMOR 2, OKE!!**



```1>``` Create remote repository:

```
heroku apps:create my-site-example  // ganti my-site-example dengan nama web anda
```



```2>``` Git commit

``` 
git add .
git commit
```



```3>``` Push to heroku

```
git push heroku master
```