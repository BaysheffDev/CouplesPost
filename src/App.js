import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline/timeline.js';
import Header from './Header/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="Container">
       	  <Timeline />
       	</div>
      </div>
    );
  }
}

export default App;
