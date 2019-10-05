# JavaScript Fundamental

## If Statement

```javascript
if(something){
  do something
} else {
  do something else
}
```



```javascript
const id = 100; // = assignment

// EQUAL TO
if(id == 101) { // == comparation
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// NOT EQUAL TO
if(id != 101) { // == comparation
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// EQUAL TO VALUE & TYPE (recomended)
const id = '100';

if(id === 100) { // === comparation
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// NOT EQUAL TO VALUE & TYPE (recomended)

if(id !== 100) { // === comparation
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id > 200) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// IF ELSE

const color = 'red';

if(color === 'red'){
  console.log('color is red')
} else if(color === 'blue') {
  console.log('color is blue')
} else {
  console.log('Color is not read or blue')
}

// LOGICAL OPERATORS

const name = 'Santos';
const age = 20;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age < 65){
  console.log(`${name} can not run in marathon`);
} else {
  console.log(`${name} is an adult`);
}

// TERNARY OPERATOR
const id = 100;
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');














```





























