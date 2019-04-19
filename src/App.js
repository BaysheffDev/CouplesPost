import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline/timeline.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Container">
       	  <Timeline />
       	</div>
      </div>
    );
  }
}

export default App;
