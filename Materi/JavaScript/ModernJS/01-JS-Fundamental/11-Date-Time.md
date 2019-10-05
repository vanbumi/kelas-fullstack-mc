# JavaScript Fundamental

## Date & Time

```javascript
let val;

const today = new Date();
let birthday = new Date('9-10-2001 11:25:00');
birthday = new Date('September 10 2001');
birthday = new Date('9/10/2001');


val = today;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();// timestamp

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(birthday);

```



referensi lebih lanjut di https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date





