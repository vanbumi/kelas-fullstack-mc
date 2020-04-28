# JavaScript Fundamental

## DOM (Document Object Model)

Yang kita pelajari:

* Cara select element.
* Cara merubah element.
* Cara style element.
* Cara membuat event pada DOM.
* Pada dasar nya bekerja pada UI.



### Window Object

* **Document object** adalah bagian dari **window object**.

* Window adalah **Global object** pada client side Javascript.

* Browser dan Window adalah Global Environment.

    

```
// pada terminal ketik window
window
	...
	...
	document // adalah CORE dari DOM
	...
	localStorage
	...
```

```>``` Window Methods / Objects / Properties

```javascript
console.log(123);
// atau
window.console.log(123);

/** Alert */
window.alert('Hello from Alert...');
// atau cukup dengan 
alert('Hello from Alert...');

/** Prompt */
const input = prompt();
alert(input);

/** Confirm */
if(confirm('Are you sure'){
	console.log('YES DELETE!');   
} else {
 	console.log('NO DONT DELETE') 
});

/** High and width browser */

let val;

// Outter height & width
val = window.outerHeight;
val = window.outerWidth;

// Inner height & width
val = window.innerHeight;
val = window.innerWidth;

/** Scroll points*/

val = window.scrollY
val = window.scrollX 

// create style di index.html
<div style="margin-top:1000px"></div>

console.log(val);

/** Location Object */
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

/** Redirect */
window.location.href = 'http://google.com'

/** Reload */
window.location.reload();

/** History Object */
window.history.go(-2);
val = window.history.length


```











