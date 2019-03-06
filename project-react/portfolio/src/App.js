import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
  }

  render() {
    return (
      <div>
        <h1>John Doe</h1>
        <p>I am Software Engineer</p>
        <p>I am Looking forward to work in your meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Bekasi, and doing code everyday</p>
              <p>Ngoding is my hobby, I love JavaScript language, and my favorite is React, React is awasome</p>
              <p>If I am not ngoding I will sleep or watch the TV.</p>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default App;