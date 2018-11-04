import React, { Component } from 'react';
import './App.css'
import Grid from './components/grid/Grid';
import Poster from './components/Poster';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Poster />
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
