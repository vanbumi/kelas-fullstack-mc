## Cara deploy web statis ke heroku

### Steps

Install git:

	git init
	
Buat akun di heroku.com, [Signup](https://signup.heroku.com/). 	
	
Download Heroku Toolbelt, [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
 
Jalankan heroku login dari Terminal:

	heroku login
 
Pindah ke folder Projects anda dan buat file baru **index.php**, dan tulis kode dibawah:

	<?php header( 'Location: /index.html' ) ; ?>

Lanjut Git command:
	
	git init 
	git add .
	git commit -m "My site ready for heroku deployment." 	
	heroku apps:create my-site-example
	git push heroku master

Hasilnya:

	“remote: Verifying deploy…. done.” 

Membuka web dari Terminal:

	heroku open

Example hasil deploy: https://webstat.herokuapp.com

