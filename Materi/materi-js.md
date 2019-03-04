## Materi Training Fullstack Developer

# JavaScript


## Pengenalan JavaScript.

Buat folder kerja JavaScript anda, buka dengan text editor brackets.io atau favorit anda.

Buatlah kode dasar struktur html:

	<!DOCTYPE html>
	<html>
		<head>
			<title></title>
			
		</head>
		
		<body>
		
		</body>
	</html>


Pada element ```<title></title>``` ketikan "Latih JavaScript".


Tambahkan ```<h1></h1>``` "Belajar JavaScript dari Dasar".


Kemudian klik tomboh "Live Preview" jika anda menggunakan brackets, kemudian lihat hasilnya.

<br>

## Bekerja dengan JavaScript, 2 cara:

### 1. Metode Inline.

Artinya memasukan kode JavaScript ke dalam kode html sbb:

	<script>
	
		console.log("Hello, world!!")
	
	</script>

Klik kanan pada browser > inspect > buka console > kemudian refresh browser, maka akan muncul di console **Hello, world!!**


### 2. Metode External JS.

Artinya menggunakan JavaScript dengan file terpisah. 

Buatlah file baru pada root dan beri nama "script.js".

Kemudian buatlah code sbb:

	console.log("Hello, world!!");
	

Jangan lupa referensikan file script.js ke dalam html dan tempatkan sebelum element ```</body>``` sbb:


	<script src="script.js"></script>


### Menampilkan keluaran JS di halaman browser.

**Membuat selector**

Untuk menempatkan dimana akan di tampilkan hasil manipulasi JS yaitu dengan cara memberikan **ID** pada element, contoh:

	<h2 id="heading"></h2>
	

Buka file script.js dan update kode nya sbb:

	document.getElementById('heading').innerHTML = "Hello, JS!!"
	
Simpan dan refresh browser, maka akan muncul heading 2 "Hello, JS!!".
	
<br>

## Variable


Buka file script.js dan tuliskan variable sbb:

	var name = "Dyo";
	console.log(name);
	
simpan dan refresh console

	var lastName = "Bumi";
	console.log(lastName);
	
simpan dan refresh console	

	var age = 26;
	console.log(age);
	
simpan dan refresh console;

	var fullName = name + lastName; // concatenation.
	console.log(fullName);
	
simpan dan refresh console;

	var job = "Trainer";
	console.log(job);
	
	var bio = "My name " + name + " " + lastName + " " + " my age " + age + " my job " + job;
	console.log(bio);
	
	
<br>

## Operator

Lanjutkan menulis kode di file script.js, jangan lupa kode sebelumnya di "comment out" :

	// komen 1 baris
	
	atau
	
	/** lebih dari 
	1 baris dan
	seterusnya
	*/


**Penambahan**

	var x = 5;
	var y = 7;
	var z = x + y;
	console.log(z);
	
	
**Perkalian**

	var a = 5;
	var b = 7;
	var c = a * b;
	console.log(c);
	
**Operator Aritmatik**

	+ 
	-
	/
	++ increment
	-- decrement
	
**Operator Assignment**

| Oerator | Contoh  | Sama |        
|----|---|---|---|
| =  | x = y  | x = y     |      
| += | x += y | x = x + y |      
| -= | x -= y | x = x - y |      
|	*= | x *= y | x = x * y |
|	/= | x /= y | x = x / y |
|	%= | x %= y | x = x % y |


Contoh:

	var x = 10;
	x += 5;
	console.log(x);
	
maka hasil nya: ```15```	


**Operator string**

	text1 = "Dyo";
	text2 = "Bumi";
	text3 = text1 + " " + text2;
	console.log(text3);
	
	x = 5 + 5;
	y = "5" + 5;
	z = "Hello" + 5;
	console.log(x);
	console.log(y);
	console.log(z);
	
	**Operator Comparation**
	
|	Operator |	Artinya	|
|---|---|
|	==	|	equal to value	|
|	===	|	equal value and equal type |
| != | not equal |
| !== | not equal value or not equal type |
| > | greather than |
| < | less than |
| >= | greather than or equal to |
| <= | less than or equal to |
| ? | ternary operator |

<br>

**Operator Logical**


|	Operator | Artinya |
|---|---|
| && | logical and |
| &#124; &#124; | logical or |
| ! | logical not |


<br>

** Cara mengetahui Type Data**

| Command | Return |
|---|---|---|
|**type of** | type data |
|**instanceof** | bolean |

<br>

**Operator Bitwise**

```& | ^ << >> >>>```

<br>

## If Else Statement

Contoh 1:

	var name = "Brandon";
	var age = 16;
	var isYoung = "Yes";
	
	if (isYoung == "Yes") {
		
		console.log(name + " is young man")
		
	} else {
	
		console.log("I hope he mature soon")
	
	}

Contoh 2:

	var hour = 18;
	if (hour < 18) {
	
		console.log("Say Yes")
	
	} else {
	
		console.log("Say Nop")
	
	};


Contoh 3:

	var time = 20;
	if (time < 10) {
		console.log("Say no way")
	} else if (time <= 20) {
		console.log("Say may be yes")
	} else {
		console.log("Good on you!!")
	}

<br>

## Type Data

### Type Data Primitif (Not Object)

1. Number: Float, Decimal, Integer.
2. String: Char, Text.
3. Boolean: True and False.
4. Undefined: Variable yang belum memiliki nilai.
5. Null: Non-existent, Memiliki nilai, yaitu null.

<br>

### Number

| Number | Nilai <br> silahkan anda isi |
|---|---|
| Float | ... |
| Decimal | ... |
| Integer | ... |

<br>

### Boolean

| Nilai boolean |
|---|
| Yes or No |
| On or Off |
| True or False |
| Top or Down |
| etc... |
	
Contoh:

	console.log(Boolean(10 > 9));	//hasilnya true
	console.log(Boolean(10 > 19)); //hasilnya false
	
**Comparison dan Condition**

| Comparation | Arti | Condition |
|---|---|---|
| == | equal | if (Day == 'Monday') |
| > | greather than | if (Salary > 1000) |
| < | less than | if (age < 10 ) |


**Semua yang memiliki Nilai adalah True**

	console.log(Boolean(100)); // true
	console.log(Boolean(3.14)); // true
	console.log(Boolean(-15)); // true
	console.log(Boolean("Hello")); // true
	console.log(Boolean("false")); // true

	console.log(Boolean(false)); // false
	console.log(Boolean(true)); // true
	console.log(Boolean("false")); // true
	
**Semua yang tanpa Nilai adalah False**	

	var x = 0;
	console.log(Boolean(x)); // false
	
	var y = "";
	console.log(Boolean(y)); // false
	
	var z = "NaN";
	console.log(Boolean(z)); // true
	
### Debugging Tools

1. ```console.log()```.
2. ```alert(Boolean())```.
3. ```prompt()```.

Contoh 1:

	var x = 0;
	console.log(Boolean(x));
	
Contoh 2:	

	var y = "";
	alert(Boolean(y)); 

Contoh 3:

	prompt("What is your name")
	
Contoh lain:

	var name = prompt("What is your name");
	console.log(name);
	
	var name = prompt("What is your name");
	alert.log(name);
	
<br>

## Switch Condition

	var job = 'Trainer'
	
	switch (job) {
		case 'Trainer':
			console.log('Dyo adalah Trainer');
			break;
		case 'Driver':
			console.log('Dyo bukan driver');
			break;
		case 'Police':
			console.log('Dyo bukan polisi');
			break;
		default:
			console.log('Not at all');
	}
	
Kita gunakan prompt:

	job = prompt("Apa profesi Dyo?")
	
Refresh browser dan jawab serta lihat hasilnya di console.


	
	










<br><br><br><br><br><br><br><br>

<hr>

Full Copyright@MedioCademy, Hak Cipta dimiliki MedioCademy di lindungi undang-undang dilarang memperbanyak dan menyebarkan nya diluar ijin MedioCademy.com.

