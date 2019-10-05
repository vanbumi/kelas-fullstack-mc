# JavaScript Fundamental

## Template Literal

```html
const name = 'Jono';
const age = 30;
const job = 'Web Developer';
const city = 'Bandung';
let html;

function kabar(){
	return 'Kabar baik dari saya'
}

// tanpa template literal (es5)

html = 	'<ul>' +
  '<li>Name: ' + name + '</li>' +
	'<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>Ciy: ' + city + '</li>' +
  '</ul>';


// dengan template string (es6), memgunakan "backtick"
html = `
  <ul>
    <li>Name: ${name}</li>
		<li>Age: ${age}</li>
  	<li>Job: ${job}</li>
  	<li>City: ${city}</li>
    <li>${4 * 4}</li>
    <li>${kabar()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

```

