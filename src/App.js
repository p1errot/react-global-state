import React, { Component } from 'reactn';
import Avatar from './components/avatar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>React App</h1>
          <p>Global states with reactn</p>
          <p><small>Click on the image to update it</small></p>
        </header>
        <main>
          <Avatar />
        </main>
      </div>
    );
  }
}

export default App;
