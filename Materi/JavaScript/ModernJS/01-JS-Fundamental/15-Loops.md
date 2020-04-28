

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

try here: https://codepen.io/vanbumi/pen/jOOQQMO



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

try here: https://codepen.io/vanbumi/pen/WNNYYoV?editors=0012



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

try here: https://codepen.io/vanbumi/pen/RwwqqKY?editors=0011



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

try here: https://codepen.io/vanbumi/pen/QWWJJpW?editors=0012



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
  console.log('number ' + i);
  i++;
}

while(i < 10);
```

try here: https://codepen.io/vanbumi/pen/mddQQWz?editors=0011



```>``` **LOOP ARRAY**

```javascript
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

for(let i=0; i < cars.length; i++){
  console.log(cars[i]);
}
```

try here: https://codepen.io/vanbumi/pen/oNNQQeq?editors=0011



**Menggunakan "forEach"**

```javascript
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

// forEach dengan single parameter
cars.forEach(function(car){
  console.log(car)
});
```

try here: https://codepen.io/vanbumi/pen/NWWEEaK?editors=0011



**forEach dengan index parameter**

```javascript
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

cars.forEach(function(car, index){
  console.log(`${index} : ${car}`)
});
```

try here: https://codepen.io/vanbumi/pen/ZEEmmaB?editors=0011



**forEach dengan array parameter**

```react
const cars = ['Honda', 'Toyota', 'Isuzu', 'Suzuki', 'BMW'];

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});
```

try here: https://codepen.io/vanbumi/pen/KKKrrQV?editors=0012



**Loop dengan Map**

```javascript
const users = [
	{id: 1, name: 'Brandon'},
	{id: 2, name: 'Ersya'},
	{id: 3, name: 'Vanya'},
	{id: 4, name: 'Vadya'},
];

const ids = users.map(function(user){
	return user.id;
  // atau
  return user.id + ' : ' +;
});

console.log(ids);
```

try here: https://codepen.io/vanbumi/pen/KKKrroV?editors=0011



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

try here: https://codepen.io/vanbumi/pen/abbQQKV?editors=0011

