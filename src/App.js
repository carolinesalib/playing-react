import React, { Component } from 'react';
import './App.css'
import Grid from './components/grid/Grid';
import Poster from './components/Poster';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [{ label: 'Default', price: 10, countIn: 0, add: 0, totalIn: 0, comp: 0, countOut: 0, totalSold: 0, totalPrice: 0 }]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Poster addNewLine={this.addNewLine} />
          <Grid lines={this.state.lines} />
        </div>
      </div>
    );
  }

  addNewLine = (label, price) => {
    var line = {
      label: label,
      price: price,
      countIn: 0,
      add: 0,
      totalIn: 0,
      comp: 0,
      countOut: 0,
      totalSold: 0,
      totalPrice: 0
    }

    this.setState({
      lines: this.state.lines.concat(line)
    });
  }
}

export default App;
