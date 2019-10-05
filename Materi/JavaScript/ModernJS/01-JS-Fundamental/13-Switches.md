# JavaScript Fundamental

## Switches

```>``` Contoh 1:

```javascript
const color = 'red';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not blue or red');
    break;
}
```



```>``` Contoh 2:

```javascript
let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;  
}

console.log(`Today is ${day}`);
```



**Kesimpulan**

Gunakan Switches bila terdapat banyak case / condition dibanding menggunakan if atau else if.





























