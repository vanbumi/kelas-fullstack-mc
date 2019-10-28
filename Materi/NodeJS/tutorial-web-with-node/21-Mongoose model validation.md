# # Membuat Web Blog dengan NodeJS



## 21. Mongoose Model Validation

```>``` Kita dapat melakukan data validation dengan mongoose model, update User model Schema kita menjadi dibawah:

```javascript
const UserSchema = new mongoose.Schema({
  username: {
   	type: String,
    required: true
  }
  email: {
  	type: String,
  	required: true,
  	unique: true
	}
  password: {
   	type: String,
    required: true
  }
});
```

```>``` Update file storeUser.js, dengan menambahkan console.log(error) dan tambahkan condition if

```javascript
module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      return redirect('/auth/register');
      console.log(error);
    }
    
    res.redirect('/');
  });
};
```

```>``` Coba buat new user baru, langsung klik register dengan form kosong.

```>``` Cek console error nya di Terminal.























<br>

<br>

<br>

<br>

<br>

<br>

<hr>

**Hak Cipta Mediocademy**, dilarang **meng-kopi**, **memperbanyak** dan **mengedarkan** Tutorial ini tanpa iji dari Mediocademy,  pelaku akan dikenakan sangsi pelanggaran hak cipta berdasarkan undang-undang yang berlaku. | mediocademy.com


