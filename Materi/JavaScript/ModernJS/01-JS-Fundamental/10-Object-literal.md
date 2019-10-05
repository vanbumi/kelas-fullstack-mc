# JavaScript Fundamental

## Object Literal

```javascript
const person = {
  firstName: 'Steven',
  lastName: 'Smith',
  age: 30,
  email: 'steven@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Bandung',
    prof: 'Jabar'
  },
  getBirthYear: function(){
    return 2019 - this.age;
  }
}

let val;

val = person;
// Get spesifik value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

// Array of object
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Brandon', age: 18},
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}



```

