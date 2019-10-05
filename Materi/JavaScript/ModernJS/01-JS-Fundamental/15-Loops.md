# JavaScript Fundamental

## Loops

**Apa itu Loop**

* Loops adalah perintah untuk mengulang-ulang hingga kondisi terpenuhi, misal nya sampai akhir member dari array atau sudah mencapai sebuah angka.

* Loops mengulang-ulang pada block kode yang sama dengan nilai yang berbeda setiap putaran.



3 Popular loo di Javascript :

* For Loop
* While Loop
* Do While loop



```>``` FOR LOOP

```		javascript
for(let i = 0; i < 10; i++){		// for(declaration variable; condition; increment, i+1)
  console.log(i);
  console.log('number ' + i);
}
```

**Break iteration**

```javascript
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 favorite!!')
    continue;
  }
  
  console.log('number ' + i);
}
```

**Perintah "break"**

```javascript
for(let i = 0; i < 10; i++){
  if(i === 7){
    console.log('STOP!')
    break;
  }
  
  console.log('number ' + i);
}
```



```>``` **WHILE LOOP**

```javascript
let i = 0; // deklarasi diluar block loop

while(condition_here){
	// inside while loop
  // increment(++)
}
```

```javascript
let i = 0;

while(i < 10){
	console.log('number ' + i);
  i++;
}
```



```>``` **DO WHILE LOOP**

```javascript
let i = 0; // deklarasi diluar block loop

do {
  // melakukan perintah
  // increment(++)
}

while(condition_here)
```

```javascript
let i = 0;

do {
  console.log('number ' + 1);
  i++;
}

while(i < 10);
```



```>``` **LOOP ARRAY**

```javascript
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

for(let i=0; i < cars.length; i++){
  console.log(cars[i]);
}
```

**Menggunakan "forEach"**

```javascript
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

// forEach dengan single parameter
cars.forEach(function(car){
  console.log(car)
});
```

```javascript
// forEach dengan index parameter
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

cars.forEach(function(car, index){
  console.log(`${index} : ${car}`)
});

// forEach dengan array parameter
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});
```

**Menggunakan Map**

```javascript
const users = [
	{id: 1, name: 'Brandon'},
	{id: 2, name: 'Ersya'},
	{id: 1, name: 'Vanya'},
	{id: 1, name: 'Vadya'},
];

const ids = users.map(function(user){
	return user.id;
  // atau
  return user.id + ' : ' +;
});

console.log(ids);
```

**For in loop**

```javascript
const user = {
  firstName: 'Joko',
  lastName: 'Sosialita',
  address: 'Yogyakarta'
}

for(let x in user){
  console.log(x);
  // atau
  console.log(`${x} : ${user[x]}`);
};
```