## Materi Pelatihan React Fundamental.

# ReactJS.

Link: https://reactjs.org/

## Apa yang anda dapat pada Pelatihan ini.

Satu

> Pelatihan ini memiliki satu tujuan menyeluruh: yaitu memberikan Anda **pengetahuan dasar** untuk menjadi **React Developer**.

Dua

> Setelah pelatihan ini anda akan tahu cara kerja React sebagai framework dan engine.

Tiga

> Bagaimana kerja React dibelakang layar, bagaimana React cocok dengan rancana besar sebuah web development. 

## Kenapa harus menjadi React Developer.

> Jika anda ingin mnejadi fullstack web developer anda harus belajar "front-end", ada beberapa front-end JS dan kenapa React? Alasannya adalah **Opportunity dan Good Engineering**.

![react-opportun](images/react-opportun.png)

> Kelebihan React lainnya adalah "Kombinasi Power, Elegance dan Simplicity" sebagai turunan dari JavaScript.

> Learning curve belajar React lebih singkat dari framework JS lain.



<br>

## Pengenalan React.

JavaScript membuat web aplikasi menjadi dinamis, merubah tampilan dan struktur tampilan, respond user event seperti mengetik, klik, hover pada aplikasi. Tanpa JavaScript website akan banyak melakukan loading saat link di klik dengan mengambil halaman html baru, ini adalah static flow, dengan JavaScript halaman web menjadi hidup dan dinamis tanpa harus me-loading halaman baru.

React berhubungan dengan semua diatas sebagai framework JavaScript, React mengoptimalkan JavaScript dengan menggunakan web browser dan membuat web app dinamis.


## Instalasi

### Instalasi Software

**1. Code Editor**: Visual Studio Code (rekomendasi) https://code.visualstudio.com/.

Cara setup agar code editor bisa dibuka di browser:
	
* cmd-shift-p (MacOS & Linux).
* ctrl-shift-p (Windows).
* Pilih dan Enter “Shell Command”, and choose “Install ‘code’ command in path.
* Buka folder project dan ketik ```code .``` maka anda dapat membuka Visual Studio Code berikut folder project dan file2 nya.
	
	Instal Extention: **ES7 React/Redux/GraphQL/React-Native snippets** (cukup search React).
	

**2. Commandline App**: 
		
	* Terminal (MacOS & Linux user). 
	* GitBash (Windows user), cara instal GitBash: https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal
		
**3. Node.js** download link: https://nodejs.org/en/download/

Cara cek version:
		
	node -v
	# harus `v8.8.1` or higher.

	npm -v
	# harus `v5.4.2` or higher.

<br>

## Membuat aplikasi Portfolio

Yang akan di pelajari pada aplikasi ini adalah konsep React:

1. React Element.
2. React Component.
3. React State.
4. React Props.


### create-react-app tool

Link: https://github.com/facebook/create-react-app

Pada Terminal buatlah folder project baru anda:

	mkdir project-react
	
	cd project-react

Menggunakan npx:

	npx --help
	
Membuat aplikasi React:

	npx create-react-app portfolio
	
setelah instalasi selesai:

	cd portfolio
	
buka code editor dengan perintah code spasi titik.

	code .

anda bisa lihat file struktur di React app sbb:

	portfolio
		-> node_modules
		-> public
			-> favicon.ico
			-> index.html
			-> manifest.sjon
		-> src
		-> .gitignore
		-> package.json
		-> README.md
		-> yarn.lock


kembali ke Terminal dan ketikan perintah sbb:

	npm start
	
	atau
	
	yarn start
	
dan jendela browser localhost:3000 dan aplikasi React akan terbuka.

Buka folder public > index.html, akan terlihat struktur kode halaman React tsb.

anda akan lihat tidak ada konten di dalam file index.html ini, karena konten di render dari halaman lain yang di tempatkan pada div root --> ```<div id="root"></div>```.

Konten di insert dari halaman **index.js**, dimana terdapat function **ReactDOM** yang akan merender **react code** dan menyisipkan ke dalam html:

	ReactDOM.render(<App />, document.getElementById('root'));
	
- dari function diatas yang menjadi target element adalah **root** sebagai id selector.	
- function diatas adalah **JSX** (JavaScript Extention) yang digunakan untuk menyisipkan element atau kode html.
- dari function diatas di render <App /> dimana element App di import dari halaman App.js:

		import App from './App';
		
Selain App di import juga:

	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';
	import * as serviceWorker from './serviceWorker';		
	
<br>	
	
**Next!** buka folder src > App.js, dan tambahkan kode sbb diatas ```<img >``` :

	<p>Hello Dyo!</p>

kemudian simpan, maka browser akan update otomatis.

App.js berisi component react yang di tulis dengan format JSX, konten file App.js inilah yang akan disisipkan kedalam html.

Masih di halaman App.js hapus semua konten didalam element ```<div className="App">``` dan ketikan "Hello React!", simpan dan akan update otomatis di browser.


<br>

## ReactDOM, Element dan JSX

Anda buka file struktur portfolio app dengan code editor, kita akan delete **src** folder, dengan tujuan agar kita bisa membuat ulang kode react dari awal sehingga memudahkan pemahaman anda dalam belajar React.

Hapus folder **src** dan buat baru folder **src**.

Buat file baru **index.js**

Import react library ke dalam file index.js:

	import React from 'react';
		
Import react DOM library:

	import ReactDOM from 'react-dom';

Render element html dengan ReactDOM:

	ReactDOM.render(<div>Coba React</div>, document.getElementById('root'));
			
Keterangan:

Kita menggunakan ```ReactDOM.render()``` untuk merender JSX kedalam html dan menampilkannya:  ```<div>Coba React</div>``` pada argument pertama, pada argument kedua kita spesifikasi lokasi menempatkannya.
Dengan mengakses document object javascript untuk menangkap element  html dengan **id = root**, dan menyisipkan file render di sana, cek di file index.html.

Kode lengkap sbb:

		import React from 'react';
		import ReactDOM from 'react-dom';
		
		ReactDOM.render(<div>Coba React</div>, document.getElementById('root'));
		
		
		

Cek di browser update akan otomatis tampil "Coba React".

<br>

## React Component

Component adalah potongan-potongan kode / class yang dibentuk menjadi satu menjadi sebuah aplikasi React.

Untuk membuat React component kita akan membuat file baru App.js :


	import React, { Component } from 'react';
	

Pada file App.js ini kita harus import React Library, selanjutnya kita harus import Component class, dengan menuliskanya antara { } sebagai opsional import.

Selanjutnya membuat **react component** yang ditulis sebagai javascript class, akan ditulis lengkap sbb:

	import React, { Component } from 'react';
	
	class App extends Component {
		render() {
			return (
				<div>
					<h1>John Due</h1>
					<p>I am Software Engineer.</p>
					<p>Looking forward to work on your meaningful projects.</p>
				</div>
			)
		} 
	}
	
	export default App;
	
Keterangan:

```class App extends Component {}```: Component pada React adalah sebuah "class" yang "extends" dari main class yaitu "Component" class.

```render()```: setiap class dapat merender sebuah ```return()```.

```return()```: class merender return yang didalamnya adalah kode JSX.
	
<br>	
	
**Kembali ke file index.js**:

Import file App.js ke dalam file index.js:

	import App from './App';
	
Update react dom sbb:

	ReactDOM.render(<App />, documen.getElementById('root'));


Kode lengkapnya sbb:

	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App';

	ReactDOM.render(<App />, document.getElementById('root'));


Simpan dan cek di browser:

	John Due
	I am Software Engineer

	I am Looking forward to work in your meaningful projects.

Bila kita klik kanan > inspect > body > div id = root:	
	
	<div id="root">
		<div>
			<h1>John Due</h1>
			<p>I am Software Engineer</p>
			<p>I am Looking forward to work in your meaningful projects.</p>
		</div>
	</div>

<br>

## JavaScript Class

Mempelajari apa itu Class akan memudahkan anda untuk memahami bagaimana React Component di implementasikan dibelakang layar dengan menggunakan pola "*inheritance* dan *class*".

Di dalam JavaScript dengan Class kita dapat membuat sebuah interface untuk object baru.

Interface adalah kumpulan dari properti dan method.

Setiap object baru berbasis class tadi akan memiliki method-method and properti-properti yang sama.

![](images/JSClass.png)

<br>

Contoh: 

Class: Animal

Property: 
* Name
* Age

Method:
* Speak()
* Move()

Secara keseluruhan interface untuk animal class saat ini adalah "name" dan "age" properties serta speak dan move method.

Class dapat di turunkan/diwariskan/inheritance, melalui inheritance kita dapat membuat class baru berdasarkan pada class atas nya (parent).

Contoh:

Class: Animal 
new Class: Lion Class
Kata lain: Lion Class **Extends** dari Animal Class.

Meskipun Lion extends Animal, bisa memiliki property sendiri:

Property: 
* Color
* Speed

Method:
* Roar (auman)

Tapi karena Lion adalah inheriting dari animal class maka juga akan mendapat akses properti dan method yang sama seperti yang sudah di declare oleh animal class.

Jadi Lion juga memiliki nama dan age properti dan speak dan move method. 

Contoh lain Class Animal.
new Class: Bear Class
Bear Class **Extends** Animal Class.

Property:
* Weight.
* Strength.

Method:
* Growl (mengeram).

Karena Bear adalah inheriting dari animal class maka juga memiliki property nama dan age serta method speak dan move. 

Kumpulan dari property dan method disebut interface, artinya masing-masing Class adalah sebuah object, object itu sendiri berdasar class-class ini adalah ini adalah **instances** dari class.

Setiap **instance** memiliki keunikan "nilai" sendiri dan bisa jadi akan men-generate banyak instance dari class yang sama.

Contohnya:

Akan ada 4 macam object berbasis Lion, 3 macam generic Animal dan 4 macam jenis Bear. 

Contoh instance Lion class:

Sebuah Lion class memiliki property unik:

* Color: Golden.
* Speed: 10 km/hour.

Instance Lion yang lain:

* Color: Red.
* Speed: 7 km/hour.

Keduanya adalah instance dari Lion Class, tapi memiliki ke unikan masing-masing.

**Rangkuman**

> Ilustrasi diatas adalah tentang cara kerja class dan inheritance didalam JavaScript.

> Component-component react dibuat dengan melalui inheritance dari **Component** class.

> Sangat penting untuk memahami konsep-konsep ini untuk memahami bagaimana component React bekerja.

Selanjutnya kita akan mempelajari konsep-konsep diatas dalam bentuk code untuk memahami lebih jauh dalam lagi.

<br>



















<br><br><br><br><br><br><br><br>

<hr>

Full Copyright@MedioCademy, Hak Cipta dimiliki MedioCademy di lindungi undang-undang dilarang memperbanyak dan menyebarkan nya diluar ijin MedioCademy.com.