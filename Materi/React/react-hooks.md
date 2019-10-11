# React

## React Hooks

Hooks adalah fitur baru React versi 16.8, pada versi sebelumnya hanya class component yang bisa menggunakan **lifecycle method** seperti *state* dan *componentDidMount* Tapi dengan React Hooks, functional component dapat menggunakan fitur state dan componentDidMount.

Pada tutorial ini kita akan membuat simple app menggunakan tiga basic React Hooks.



# Creating React App

To create a new app, use the following method:

```
yarn create react-app react-hooks-app
```

If you have never used **Yarn**, you will need to install it on your system. Or, you can use `npm` instead.

Move to the app’s directory and start a local server:

```
cd react-hooks-app
yarn start
```

A new browser tab opens and displays the initial page. If not, open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

Edit the `App.js` file and see how the display changes:

<iframe src="https://medium.com/media/7d860254a6737834b29c3eca7072ba5a" allowfullscreen="" frameborder="0" height="351" width="680" title="#1 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 351px; position: absolute;"></iframe>

Save the file and look at your browser. Did “App” appear?

Since the `App.test.js` and `logo.svg` files are not used, you can remove them from your project.

# Using Materialize

In this tutorial, we will use **Materialize** as a front-end framework. You can easily get started with CDN. In addition, include a line for using **Material Design Icons**. Open the `index.html` file in the `public` directory:

<iframe src="https://medium.com/media/89c2b9aaa1a5b6fa24a27ef87c7f4418" allowfullscreen="" frameborder="0" height="278" width="680" title="#2 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 278px; position: absolute;"></iframe>

Simply add the `<link>` tags inside the **<head>** tag and the `<script>` tag inside the **<body>** tag. Also, change the title.

# Using Context

To be honest, the app we are going to create is so simple that we do not need to use **Context**, but I would like to use it as a test.

Create a new folder named `contexts` in the `src` directory, then add a new file named `BookContext.js` inside the folder:

<iframe src="https://medium.com/media/bc0cdb95692119b33eb88135dfb3c9cd" allowfullscreen="" frameborder="0" height="857" width="680" title="#3 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 857px; position: absolute;"></iframe>

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

<iframe src="https://medium.com/media/c3c68d444c05dc242185b23d4cf86d4b" allowfullscreen="" frameborder="0" height="923" width="680" title="#4 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 923px; position: absolute;"></iframe>

`useContext`, one of the Hooks, receives a context object and returns the current value of the context.

## BookForm

Create a file named `BookForm.js`:

<iframe src="https://medium.com/media/bd157b6190733d8a89cd6a12a298d364" allowfullscreen="" frameborder="0" height="1715" width="680" title="#5 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 1715px; position: absolute;"></iframe>

Form components use a state to store temporary values. After submitting a form data, use the `setBook` function to empty the values.

If a state object has multiple values, we can write `handleChange` using the Spread Operator.

## Dashboard

Create a new component to bundle these two components:

<iframe src="https://medium.com/media/5d09cff409e9fc3b054c53d0e8927f2c" allowfullscreen="" frameborder="0" height="395" width="680" title="#6 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 395px; position: absolute;"></iframe>

## About

Create a simple component for the about page:

<iframe src="https://medium.com/media/bc40d632c8309e8c3c7f3b1ba191286d" allowfullscreen="" frameborder="0" height="527" width="680" title="#7 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 527px; position: absolute;"></iframe>

## Contact

Also, create a component for the contact page:

<iframe src="https://medium.com/media/0b5b7c8e3f86148be78d39bf66918dcc" allowfullscreen="" frameborder="0" height="659" width="680" title="#8 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 659px; position: absolute;"></iframe>

## Navbar

Finally, create a navbar component:

<iframe src="https://medium.com/media/7e8071e1aaa8a49d9c7e017c049b6891" allowfullscreen="" frameborder="0" height="1385" width="680" title="#9 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 1385px; position: absolute;"></iframe>

The last one of the Basic Hooks, `useEffect`, is used here. It is clearly described in the React Docs:

> If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

In our `useEffect` hook, initialization code for a slide-out menu provided by Materialize is set.

Install a module to use `Link` navigation:

```
yarn add react-router-dom
```

# Updating the App component

Now, nest all the components we have created in the `App` component:

<iframe src="https://medium.com/media/c595c75d2f1a3215e18701db0e751568" allowfullscreen="" frameborder="0" height="637" width="680" title="#10 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 637px; position: absolute;"></iframe>

We can use the contexts by setting our `ContextProvider` as above.

# Styling the App

As a final touch, style our app a bit. Open the `App.css` file and overwrite it as follows:

<iframe src="https://medium.com/media/da0832102e2af72f8182d82eead56e44" allowfullscreen="" frameborder="0" height="1363" width="680" title="#11 React Hooks App - Medium" class="hg n o hf af" scrolling="auto" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 1363px; position: absolute;"></iframe>

It is convenient to define CSS variables for colors that are used repeatedly. It will be effective when your app grows.

# Testing the App

The Book App should look like this:

![img](https://miro.medium.com/max/60/1*hZ4bnjIO3pujG123nXjE5Q.png?q=20)

![img](https://miro.medium.com/max/960/1*hZ4bnjIO3pujG123nXjE5Q.png)

Dashboard

Add some items to see if the form is working. Also, test the delete action.