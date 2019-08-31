import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline/timeline.js';
import Header from './Header/header.js';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="Container">
          <div>
            <Login />
            <Register />
          </div>
       	  <Timeline />
       	</div>
      </div>
    );
  }
}

export default App;
