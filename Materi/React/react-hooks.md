# React

## React Hooks

Hooks adalah fitur baru React versi 16.8, pada versi sebelumnya hanya class component yang bisa menggunakan **lifecycle method** seperti *state* dan *componentDidMount* Tapi dengan React Hooks, functional component dapat menggunakan fitur state dan componentDidMount.

Pada tutorial ini kita akan membuat simple app menggunakan tiga basic React Hooks.



# Creating React App

To create a new app, use the following method:

```react
yarn create react-app react-hooks-app
```

atau gunakan **npx** :

```
npx create-react-app my-app
```

If you have never used **Yarn**, you will need to install it on your system. Or, you can use `npm` instead.

Move to the app’s directory and start a local server:

```
cd react-hooks-app

yarn start
```

atau :

```
npm start
```

A new browser tab opens and displays the initial page. If not, open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

Edit the `App.js` file and see how the display changes:

```react
// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>App</h1>
    </div>
  );
};

export default App;
```



Save the file and look at your browser. Did “App” appear?

Since the `App.test.js` and `logo.svg` files are not used, you can remove them from your project.



# Using Materialize

In this tutorial, we will use **Materialize** as a front-end framework. You can easily get started with CDN. In addition, include a line for using **Material Design Icons**. Open the `index.html` file in the `public` directory:

```react
<!-- public/index.html -->

<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
<title>Book App</title>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

Simply add the `<link>` tags inside the **<head>** tag and the `<script>` tag inside the **<body>** tag. Also, change the title.



# Using Context

To be honest, the app we are going to create is so simple that we do not need to use **Context**, but I would like to use it as a test.

Create a new folder named `contexts` in the `src` directory, then add a new file named `BookContext.js` inside the folder:

```react
// src/contexts/BookContext.js

import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Goodnight Moon',
      author: 'Margaret Brown'
    },
    {
      id: 2,
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle'
    }
  ]);

  const addBook = book => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
```



`useState` is one of the Basic Hooks. It returns a stateful value `[state, ...]`, and a function `[..., setState]` to update it.

Context objects come with a `Provider` component. It takes a `value` property and passes it to descendant components.

`uniqid` is a unique ID generator.

```
yarn add uniqid
```

It is very easy to use.



# Creating Components

Create a new folder named `components` in the `src` directory, then add some component files inside the folder.

## BookList

First, create a file named `BookList.js`:

```react
// src/components/BookList.js

import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import bookThumb from '../book.png';

const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);

  return (
    <div className='section section-books'>
      <div className='container'>
        <h6>Books</h6>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div className='card book'>
                <div className='book-image'>
                  <img src={bookThumb} alt='book thumb' />
                </div>
                <div className='book-details'>
                  <div className='book-title'>{book.title}</div>
                  <div className='book-author'>{book.author}</div>
                </div>
                <div
                  onClick={() => deleteBook(book.id)}
                  className='book-delete'
                >
                  <i className='material-icons'>delete</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
```

`useContext`, one of the Hooks, receives a context object and returns the current value of the context.



## BookForm

Create a file named `BookForm.js`:

```react
// src/components/BookForm.js

import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: '',
    author: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book);
    setBook({
      title: '',
      author: ''
    });
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Book</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={book.title}
              onChange={handleChange}
              placeholder='e.g. Charlie and the Chocolate Factory'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='author'
              name='author'
              value={book.author}
              onChange={handleChange}
              placeholder='e.g. Roald Dahl'
              className='validate'
              required
            />
            <label className='active' htmlFor='author'>
              Author
            </label>
          </div>
          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'
            >
              <i className='material-icons right'>add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
```

Form components use a state to store temporary values. After submitting a form data, use the `setBook` function to empty the values.

If a state object has multiple values, we can write `handleChange` using the Spread Operator.



## Dashboard

Create a new component to bundle these two components:

```react
// src/components/Dashboard.js

import React, { Fragment } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Dashboard = () => {
  return (
    <Fragment>
      <BookList />
      <BookForm />
    </Fragment>
  );
};

export default Dashboard;
```



## About

Create a simple component for the about page:

```react
// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h5>About Us</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default About;
```



## Contact

Also, create a component for the contact page:

```react
// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <h5>Contact Us</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className='divider' />
      <h6>Address:</h6>
      <ul>
        <li>2020 Summer Games</li>
        <li>Tokyo, Japan</li>
      </ul>
    </div>
  );
};

export default Contact;
```



## Navbar

Finally, create a navbar component:

```react
// src/components/Navbar.js

import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'right' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/' className='brand'>
            book<span>app</span>
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='right sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='waves-effect sidenav-close'>
            <i className='material-icons'>business</i>About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='waves-effect sidenav-close'>
            <i className='material-icons'>mail</i>Contact
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
```



The last one of the Basic Hooks, `useEffect`, is used here. It is clearly described in the React Docs:

> If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

In our `useEffect` hook, initialization code for a slide-out menu provided by Materialize is set.

Install a module to use `Link` navigation:

```
yarn add react-router-dom
```



# Updating the App component

Now, nest all the components we have created in the `App` component:

```react
// src/App.js

import React from 'react';
import BookContextProvider from './contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
};

export default App;
```

We can use the contexts by setting our `ContextProvider` as above.



# Styling the App

As a final touch, style our app a bit. Open the `App.css` file and overwrite it as follows:

```react
/* src/App.css */

/* colors */
:root {
  --theme: #004d40;
  --bg-grey: #f5f5f5;
  --border: #e0e0e0;
}

/* layout styles */
nav {
  background: var(--theme);
}
nav .brand {
  font-size: 1.5rem;
  margin-left: 1.5rem;
}
nav .brand span {
  font-weight: 700;
}

.section-books {
  background: var(--bg-grey);
  border-bottom: 1px solid var(--border);
}

/* book styles */
.card.book {
  display: grid;
  grid-template-areas: 'image details delete';
  grid-template-columns: 80px 1fr 40px;
  padding: 1rem;
}
.book-image {
  grid-area: image;
}
.book-image img {
  max-width: 50px;
}
.book-details {
  grid-area: details;
  color: #616161;
}
.book-title {
  font-weight: 700;
}
.book-author {
  font-size: 0.8rem;
}
.book-delete {
  grid-area: delete;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

/* form styles */
form .input-field {
  margin: 2rem 0;
}
```

It is convenient to define CSS variables for colors that are used repeatedly. It will be effective when your app grows.



# Testing the App

The Book App should look like this:

![img](https://miro.medium.com/max/60/1*hZ4bnjIO3pujG123nXjE5Q.png?q=20)

![img](https://miro.medium.com/max/960/1*hZ4bnjIO3pujG123nXjE5Q.png)



Add some items to see if the form is working. Also, test the delete action.

Try About Us.

Contact Us.

Done.