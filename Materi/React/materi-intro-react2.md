## Materi Pelatihan React Fundamental.

# ReactJS.

Github branch: second

### 1. Lifecycle Methods

Lifecycle method pada React adalah function yang berjalan pada setiap siklus component di react, artinya function ini berjalan pada saat component loading untuk pertama kali pada aplikasi dan pada saat component keluar dari aplikasi. 

Lifecycle method berlandasan pada hubungan antara component dengan document, menyisipkan component JSX ke dalam document.

Contoh:

```react
reactDOM.render(<element />, document.getElementById('root'));
```

menyisipkan atau menghilangkan / menghapus element element:

```	react
<html>
	<head></head>
  <body>
  	<div id="root">
      <element />
    </div>
  </body>
</html>
```

```react
<html>
	<head></head>
  <body>
  	<div id="root">
      
    </div>
  </body>
</html>
```



### 1.a. ComponentDidMount() 

Function ini berjalan pada saat component load pertama kali pada aplikasi.

### 1.b. ComponentWillUnmount()

Function bekerja sebaliknya, function ini berjalan pada saat component meninggalkan aplikasi.



### 1.a. ComponentDidMount()

/> Pada aplikasi Portfolio sebelumnya tambahkan file baru "**Title**" dibawah folder **src**, kemudian tambahkan kode sbb:

``` react
import React, { Component } from 'react';

const TITLE = [
  'a software engineer',
  'a guitaris pro',
  'a good learner',
  'a sport activity man'
];

class Title extends Component {
  state = { titleIndex: 0 };
  
  render() {
    const title = TITLE[this.state.titleIndex]
    
    return (
      <p>I am {title}</p>
    )
  }
}

export default Title;
```

/> Pada file App.js require Title:

```react
import Title from './Title';
```

/> Sisipkan dibawah name:

```react
<h1>John Deep</h1>
<h3>Software Engineer</h3>
<p><Title /></p>
```

/> Coba hasilnya di browser.



/> Selanjutnya kita akan tambahkan componentDidMount pada kode tsb menjadi sbb;

```react
import React, { Component } from 'react';

const TITLE = [
  'a software engineer',
  'a guitaris pro',
  'a good learner',
  'a sport activity man'
];

class Title extends Component {
  state = { titleIndex: 0 };

	// componentDidMount
	componentDidMount() {
    console.log('Component Title has mounted')
    
    this.animateTitles();
  }

	// create helper method animateTitles
	animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.lenght;
      
      this.setState({ titleIndex });
    }, 3000);
  }
  
  render() {
    const title = TITLE[this.state.titleIndex]
    
    return (
      <p>I am {title}</p>
    )
  }
}

export default Title;
```

/> Coba kembali hasilnya di browser.



###1.b. ComponentWillUnmount 

ComponentWillUnmount bekerja sebaliknya dari componentDidMount.

/> Tambahkan componentWillUnmount dibawah componentDidMount pada kode sebelumnya:

```react
componentWillUnmount() {
  console.log('Component Title will unmount');
}
```

/> Coba cek hasilnya di console log.

/> Update kode interval menjadi sbb:

```react
animateTitles = () => {
    this.setInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.lenght;
      
      this.setState({ titleIndex });
    }, 3000);
  
  	console.log('this.setInterval', this.setInterval);
  }
```

/> Update componentWillUnmount menjadi:

```react
componentWillUnmount() {
  console.log('Component Title will unmount');
  
  clearInterval(this.titleInterval);
}
```

/> Coba hasilnya di browser.



### 2. Stateless Functional Components

Sebelumnya kita akan meng-organisasi file component menjadi satu di folder component:

/> Dibawah folder src buatlah folder baru "components".

/> Kemudian pindahkan App.js, Project.js, SocialProfiles.js dan Title.js ke dalam folder components.

/> Jangan lupa untuk sesuaikan link import pada file App.js :

```react
import profile from '../assets/profile.png'
```

/> Pada Project.js :

```react
import PROJECTS from '../data/projects';
```

/> Pada SocialProfiles.js :

```react
import SOCIAL_PROFILES from '../data/socialProfiles';
```

/> Pada index.js :

```react
import App from './components/App';
```

/> Coba cek hasilnya di browser.



**Stateless Functional Syntax**

Stateless Functional Component adalah alternatif sintax dalam membuat React Component tanpa harus extending component class, dengan kata lain tidak usah menggunakan class component jika tidak ada **state** didalamnya, sebagai ganti nya kita dapat menggunakan function (arrow function) yang langsung ***return*** JSX, tanpa harus menggunakan ***render method*** lagi.

/> Buka file Projects.js dan lakukan refactor dari class component menjadi functional component :

```react
const Proyek = props => {
  const { title, image, description, link } = props.rempeyek;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
      <p className="description">{description}</p>
      <a href="{link}" className="link">{link}</a>
    </div>
  )
}
```

/> Cek hasilnya dibrowser pastikan tidak ada error.

/> Kemudian pada class Proejcts kita refactor juga :

```react
const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {
        PROJECTS.map(PROJECT => (
            <Proyek key={PROJECT.id} rempeyek={PROJECT} />
        ))
      }
    </div>
  </div>
)
  
```

Catatan: Jika function body hanya berisi return statement, maka kita bisa membuat ***inline return*** tanpa kata ***return*** dan tanpa ***kurung kurawal***.

/> Buang juga component di import  react diatas, menjadi :

```react
import React from 'react';
```

/> Test hasil di browser pastikan tidak ada error.



/> Selanjutnya adalah file SocialProfiles.js kita harus Refactor :

```react
const SocialProfile = props => {
  const { link, image } = props.rempeyek;

  return (
    <span>
      <a href={link}>
        <img src={image} alt="social-profile" style={{ width: 35, height: 35, margin: 10 }} />
      </a>
    </span>
  )
}
```

/> Dan SocialProfiles juga

```react
const SocialProfiles = () => (
  <div>
    {
      SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
      	<SocialProfile key={SOCIAL_PROFILE.id} rempeyek={SOCIAL_PROFILE} />
      })
    }
  </div>
)
```

/> Test hasil di browser pastikan tidak ada error.



### Fetch Data API

Kita akan menampilkan data yang diambil dari service API, dengan membuat component React.

/> Buat Component baru "Jokes.js", tambahkan class sintaks sbb:

``` react
import React, { Component } from 'react';

class Jokes extends Component {
  state = { joke: {} };

	componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    	.then((response) => {response.json()})
    	.then((json) => {this.setState({ joke: json })});
  }

	render() {
    return (
    	<div></div>
    )
  }
}
```

/> Callback function diatas bila memuat hanya 1 argument bisa ditulis dengan lebih simple seperti ini :

```react
.then(response => response.json())
.then(json => this.setState({ joke: json }));
```

/> Pada App.js import Jokes component :

```react
import Jokes from './Jokes';
```

/> Tambahkan component pada kode di App.js :

```react
   }
   <hr />
   <Projects />
   <hr />
   <SocialProfiles />
   <hr />
   <Jokes />
 </div>
```

/> Kemudia di render ke UI sbb:

```react
import React, { Component } from 'react';

class Jokes extends Component {
  state = { joke: {} };

	componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    	.then((response) => {response.json()})
    	.then((json) => {this.setState({ joke: json })});
  }

	render() {
    const { setup, punchline } = this.state.joke;
    
    return (
      
    	<div>
        <h2>Today Joke</h2>
      	<p>{setup} <em>{punchline}</em></p>
      </div>
    )
  }
}
```

/> Lihat hasilnya di browser.














<br><br><br><br><br><br><br><br>

<hr>

Full Copyright@MedioCademy, Hak Cipta dimiliki MedioCademy di lindungi undang-undang dilarang memperbanyak dan menyebarkan nya diluar ijin MedioCademy.com.