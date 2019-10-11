# Node JS, Express & MongoDB



### TUTORIAL NODE JS, EXPRESS MONGODB CRUD

* Source on gitlab.com
* Heroku: ...



#### 1. Setup project



```>``` Buatlah folder project pada folder kerja anda berinama "node-crud-app".

```>``` Buka dengan code editor.

```>``` Pada Terminal gunakan perintah **npm init**

``` 
npm init
```

```>``` Isilah interaktif question sbb:

```
package name: node-crud-app

version: 1.0.0

description: kosong

entry point: server.js

test command: kosong

git repository: kosong

keywords: kosong

author: isi dengan nama anda

license: (ISC)

is this OK? yes
```



#### 2. Install Packages 

* express: https://www.npmjs.com/package/express
* mongoose: https://www.npmjs.com/package/mongoose
* express-handlebars: https://www.npmjs.com/package/express-handlebars
* body-parser: https://www.npmjs.com/package/body-parser



pada Terminal ketik perintah ini:

```
npm i --save express mongoose express-handlebars body-parser
```



#### 3. Setup MongoDB Database.

```>``` Install **mongodb compass** : https://docs.mongodb.com/compass/master/install/

```>``` Aktifkan server mongodb dengan perintah: ```mongod``` pada Terminal:

```
mongod
```

```>``` Create new database dan new collection dengan mongoCompass.

```
Database name: EmployeeDB
Collection Name: employees
```



#### 4. Create Connection to Database.

```>``` Buka code editor kembali.

```>``` Buat folder baru "models".

```>``` Buat file baru dibawah folder models "db.js".

```>``` Buat kode connection seperti dibawah:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (!err) { console.log('MongoDB Connection Succeeded.') }
  else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');

{ useUnifiedTopology: true }
```

```>``` Buat file baru lagi dibawah folder models berinama: "employee.model.js"

```javascript
var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

mongoose.model('Employee', employeeSchema);
```



#### 5. Create root file server.js

```>``` Require file db.js pada file server.js tsb:

```javascript
require('./models/db');

const express = require('express');
const path = require('path');

var app = express();


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server started at port ${port}`);
});
```



```>``` Install nodemon bagi yang belum, install di : https://www.npmjs.com/package/nodemon

```
npm install nodemon -g
```

```>``` Menjalankan server dengan perintah ```nodemon```

pada Terminal akan ada pesan "Express server started at port 3000"

``>`` Buka browser dengan port 3000:

```
localhost:3000
```

akan muncul pesan "Cannot GET /" sebabnya kita belum membuat route untuk halaman index which is localhost:3000, next kita akan membuat routenya.

```>``` route akan kita kumpulkan di bawah folder **controllers**, untuk itu buatlah folder baru nama: controller pada folder root.

```>``` dibawah folder controller kita buat file baru "**employeeController.js**" dan update nya dengan code dibawah :

```javascript
const express = require('express');
let router = express.Router();

// halaman employee
router.get('/', (req, res) => {
	res.json('Halaman Employee');
});

module.exports = router;
```

```>``` Require file **employeeController.js** pada main file server.js:

```javascript
const employeeController = require('./controllers/employeeController');
```

```>``` Kemudian gunakan middleware **app.use** untuk membuat route  index dan /employee:

```javascript
app.use('/employee', employeeController);
```

keterangan: 

app.use middleware dengan parameter pertama yaitu menentukan **endpoint**,

parameter kedua yaitu dengan melewatkan file **employeeController**.  

```>``` Buka browser localhost:3000/employeee.



#### 6. Menggunakan Express-Handlebars

Express-handlebars kita gunakan untuk menangani view di front-end pada aplikasi kita.

```>``` Require handlebars di file server.js :

```javascript
// require express-handlebars (exphbs)
const exphbs = require('express-handlebars');
```

```>``` Setup views & express-handlebars:

```javascript
app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));

app.set('view engine', 'hbs');
```

```>``` Create folder "**views**" diatas pada root level dan dibawah nya buat folder lagi "**layouts**".

```>``` Dibawah folder layout buat file baru "**mainLayout.hbs**" dan buat structure html di halaman tsb :

``` html
<!DOCTYPE html>

<html>

<head>
  <title>Node.js Express MongDB CRUD</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body class="bg-secondary">
  <div class="row">
    <div class="col-md-6 offset-md-3" style="background-color: #fff; margin-top: 25px;padding:20px;">
      {{{body}}}
    </div>
  </div>

</body>

</html>
```



```>``` Buat folder dan file baru "**addOrEdit.hbs**"  dibawah folder "views" > "**employee**".

```>``` Update kode nya sbb:

``` html
<h3>{{viewTitle}}</h3>

<form action="/employee" method="POST" autocomplete="off">
    
  <div class="form-group">
    <label>Full Name</label>
    <input type="text" class="form-control" name="fullName" placeholder="Full Name">
  </div>

  <div class="form-group">
    <label>Email</label>
    <input type="text" class="form-control" name="email" placeholder="Email">
  </div>

  <div class="form-row">
    
    <div class="form-group col-md-6">
      <label>Mobile</label>
      <input type="text" class="form-control" name="mobile" placeholder="Mobile">
    </div>

    <div class="form-group col-md-6">
      <label>City</label>
      <input type="text" class="form-control" name="city" placeholder="City">
    </div>
    
  </div>
  
	<div class="form-group">
    <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
  </div>
</form>
```





```>``` Update route get pada file employeeController.js.

```javascript
router.get('/', (req, res) => {
  res.render("employee/addOrEdit", {
    viewTitle: "Insert Employee"
  });
});
```

```>``` Lihat hasil nya pada browser localhost:3000/employee.



Jika anda perhatikan pada form tsb ketika anda ketik kan sesuatu akan muncul *autocomplete* atau *word prediction* dari inputan data sebelumnya mungkin pada laptop anda, kita dapat mencegah fitur tsb dengan mengupdate form sbb:

```html
<form autocomplete="off">
  // kode
</form>
```

```>``` Pada form tsb tambahkan juga action & method :

```html
<form action="/employee" method="POST">
  // kode
</form>
```

```>``` Lanjut dengan membuat route untuk ```action="/employee"```, kembali ke file **employeeController.js** tambahkan kode sbb:

```javascript
router.post('/', (req, res) => {
  console.log("hello from form")
});
```

```>``` Agar inputan dari form tidak di parsing ke browser uri, maka digunakan body-parser untuk menangkap inputan / request dari form.

```>``` Require dan setup body-parser pada file server.js:

```javascript
const employeeController = require('body-parser');
```

```javascript
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

```>``` Test dengan meng-update route menjadi ```req.body```:

```javascript
router.post('/', (req, res) => {
  console.log(req.body)
});
```

Isi sembarang formnya dan Submit, lihat hasil nya di console Terminal.



#### 7. Menyimpan kedalam Database.

```>``` Pada file **employeeController.js** required mongoose dan Employee model:

```javascript
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
```

```>``` Update route post sbb:

```javascript
router.post('/', (req, res) => {
  insertRecord(req, res)
});
```

```>``` Masih di file employeeController.js buat function *insertRecord* :

```javascript
// letakan dibawah router.post
function insertRecord(req, res) {
  var employee = new Employee();

  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err)
      res.redirect('employee/list');
     else
      console.log('Error during record insertion : ' + err);
    }
  });
}
```

```>``` Kita harus membuat route untuk list diatas, buat diatas module.exports :

```javascript
router.get('/list', (req, res) => {
	res.json('this is list page') 
});
```

```>``` Lakukan test dengan mengisi form dan klik Submit, maka akan di render ke halaman localhost:3000/employee/list.

```>``` Kemudian cek di mongo compass apakah data ter-record.



#### 8. Create Form Validation

```>``` Update database schema dari employee,  buka file employee.model.js sbb:

```javascript
var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

```

``>`` Untuk email validation kita gunakan regular-expression (regex):

```javascript
// Custom validation for email
employeeSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');
```



```>``` Validasi untuk **insert record** kedalam database, buka file **employeeController** update code sbb:

```javascript
function insertRecord(req, res) {
  var employee = new Employee();

  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err)
      res.redirect('employee/list');
    else {
      if (err.name == 'ValidationError') {
        handleValidationError(err, req.body);
        res.render("employee/addOrEdit", {
          viewTitle: "Insert Employee",
          employee: req.body
        });
      }
      else
        console.log('Error during record insertion : ' + err);
    }
  });
}
```



```>``` Update juga code untuk form addOrEdit.hbs:

```javascript
<h3>{{viewTitle}}</h3>

<form action="/employee" method="POST" autocomplete="off">
  <input type="hidden" name="_id" value="{{employee._id}}">
  <div class="form-group">
    <label>Full Name</label>
    <input type="text" class="form-control" name="fullName" placeholder="Full Name" value="{{employee.fullName}}">
    <div class="text-danger">
      {{employee.fullNameError}}</div>
  </div>
  <div class="form-group">
    <label>Email</label>
    <input type="text" class="form-control" name="email" placeholder="Email" value="{{employee.email}}">
    <div class="text-danger">
      {{employee.emailError}}</div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Mobile</label>
      <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="{{employee.mobile}}">
    </div>
    <div class="form-group col-md-6">
      <label>City</label>
      <input type="text" class="form-control" name="city" placeholder="City" value="{{employee.city}}">
    </div>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
    <a class="btn btn-secondary" href="/employee/list"><i class="fa fa-list-alt"></i> View All</a>
  </div>
</form>
```

```>``` Cek hasil nya pada browser localhost:3000/employee klik Submit dengan form kosong, akan muncul pesan error. 

```>``` Isi fulname dan Email invalid test, lihat hasilnya.



```>``` Selanjutnya kita akan membuat halaman list employee dengan me-retrieve data dari database. 

Update file **employeeController.js** dan update **router.get('/list')**:

```javascript
router.get('/list', (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.render("employee/list", {
        list: docs
      });
    }
    else {
      console.log('Error in retrieving employee list :' + err);
    }
  });
});
```

```>``` Selanjutnya buat file baru "**list.hbs**" di folder views > employee, kemudian update dengan kode sbb:

```javascript
<h3><a class="btn btn-secondary" href="/employee"><i class="fa fa-plus"></i> Create New</a> Employee List</h3>
<table class="table table-striped">
  <thead>
    <tr>
      <th>Full Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>City</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {{#each list}}
    <tr>
      <td>{{this.fullName}}</td>
      <td>{{this.email}}</td>
      <td>{{this.mobile}}</td>
      <td>{{this.city}}</td>
      <td>
        <a href="/employee/{{this._id}}"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a>
        <a href="/employee/delete/{{this._id}}" onclick="return confirm('Are you sure to delete this record ?');"><i
            class="fa fa-trash fa-lg" aria-hidden="true"></i></a>
      </td>
    </tr>
    {{/each}}
  </tbody>
</table>
```

```>``` Lihat hasilnya pada browser localhhost;3000/employee/list



```>``` Selanjutnya kita akan mengaktifkan pencil edit agar bisa melakukan edit pada data employee, buka kembali employeeController.js, tambahkan kode route, letakkan sebelum modul.export :

```javascript
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("employee/addOrEdit", {
        viewTitle: "Update Employee",
        employee: doc
      });
    }
  });
});
```

```>``` Kita akan menambahkan hidden field untuk menyimpan **_Id** sehingga kita bisa meng-update data employee. 

```javascript
<input type="hidden" name="_id" value="{{employee._id}}">
```

kode lengkap form nya menjadi seperti dibawah :

```javascript
<form action="/employee" method="POST" autocomplete="off">
  <input type="hidden" name="_id" value="{{employee._id}}">
  <div class="form-group">
    <label>Full Name</label>
    <input type="text" class="form-control" name="fullName" placeholder="Full Name" value="{{employee.fullName}}">
    <div class="text-danger">
      {{employee.fullNameError}}</div>
  </div>
  <div class="form-group">
    <label>Email</label>
    <input type="text" class="form-control" name="email" placeholder="Email" value="{{employee.email}}">
    <div class="text-danger">
      {{employee.emailError}}</div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Mobile</label>
      <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="{{employee.mobile}}">
    </div>
    <div class="form-group col-md-6">
      <label>City</label>
      <input type="text" class="form-control" name="city" placeholder="City" value="{{employee.city}}">
    </div>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
    <a class="btn btn-secondary" href="/employee/list"><i class="fa fa-list-alt"></i> View All</a>
  </div>
</form>
```

```>``` Coba klik pencil edit.

```>``` Bila anda klik kanan dan **inspect** maka anda akan melihat hidden field Id employee.

```>``` Untuk mengaktifkan button update kita harus meng-update route post untuk request **post** dan **update** sekaligus:

```javascript
router.post('/', (req, res) => {
  if (req.body._id == '')
    insertRecord(req, res);
  else
    updateRecord(req, res);
});
```

```>``` Buat function updateRecordnya :

```javascript
function updateRecord(req, res) {
  Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) { res.redirect('employee/list'); }
    else {
      if (err.name == 'ValidationError') {
        handleValidationError(err, req.body);
        res.render("employee/addOrEdit", {
          viewTitle: 'Update Employee',
          employee: req.body
        });
      }
      else
        console.log('Error during record update : ' + err);
    }
  });
}
```

```>``` Coba hasilnya di browser dengan lakukan edit.



```>``` Lanjut dengan mengaktifkan tombol detele, buat route untuk delete sbb:

```javascript
router.get('/delete/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/employee/list');
    }
    else { console.log('Error in employee delete :' + err); }
  });
});
```



```>``` Coba hasilnya dibrowser dengan url: localhost:3000/employee.



















<br>

```javascript
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
```















<br>

<br>

<hr>

mediocademy.com





