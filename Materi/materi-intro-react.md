## Materi Pelatihan React Fundamental.

# ReactJS.

## Apa yang anda dapat pada Pelatihan ini.

> Pelatihan ini memiliki satu tujuan menyeluruh: yaitu memberikan Anda **pengetahuan dasar** untuk menjadi **React Developer**.

> Setelah pelatihan ini anda akan tahu cara kerja React sebagai framework dan engine.

> Bagaimana React dibelakang layar, bagaimana React cocok dengan rancangan besar sebuah web development. 

## Kenapa harus menjadi React Developer.

> Jika anda ingin mnejadi fullstack web developer anda harus belajar "frontend", ada beberapa frontend JS dan kenapa React? Alasannya adalah **Opportunity dan Good Engineering**.

![react-opportun](images/react-opportun.png)

> Kelebihan React lainnya adalah "Kombinasi Power, Elegance dan Simplicity" sebagai turunan dari JavaScript.

> Learning curve belajar React lebih singkat dari framework JS lain.



<br>

## Pengenalan React.

JavaScript membuat web aplikasi menjadi dinamis, merubah tampilan dan struktur tampilan, respond user event seperti mengetik, klik, hover pada aplikasi. Tanpa JavaScript website akan banyak melakukan loading saat link di klik dengan mengambil halaman html baru, ini adalah static flow, dengan JavaScript halaman web menjadi hidup dan dinamis tanpa harus me-loading halaman baru.

React berhubungan dengan semua diatas sebagai framework JavaScript, React mengoptimalkan JavaScript dengan menggunakan web browser dan membuat web app dinamis.


## Instalasi

### Instalasi Software

1. **Code Editor**: Visual Studio Code (rekomendasi) https://code.visualstudio.com/.

	Cara setup agar code editor bisa dibuka di browser:
	
	* cmd-shift-p (MacOS & Linux).
	* ctrl-shift-p (Windows).
	* Pilih dan Enter “Shell Command”, and choose “Install ‘code’ command in path.
	* Buka folder project dan ketik ```code .``` maka anda dapat membuka Visual Studio Code berikut folder project dan file2 nya.
	
	Instal Extention: **ES7 React/Redux/GraphQL/React-Native snippets** (cukup search React).
	

2. **Commandline App**: 
		
	* Terminal (MacOS & Linux user). 
	* GitBash (Windows user), cara instal GitBash: https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal
		
3. **Node.js** download link: https://nodejs.org/en/download/

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










<br><br><br><br><br><br><br><br>

<hr>

Full Copyright@MedioCademy, Hak Cipta dimiliki MedioCademy di lindungi undang-undang dilarang memperbanyak dan menyebarkan nya diluar ijin MedioCademy.com.