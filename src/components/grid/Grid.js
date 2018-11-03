import React, { Component } from 'react';
import Header from './Header';
import LineGrid from './LineGrid';
import Line from './Line';

class Grid extends Component {
  data = {
    countIn: 0,
    add: 0,
    totalIn: 0,
    comp: 0,
    countOut: 0,
    totalSold: 0
  }

  render() {
    return (
      <div className="Grid">
        <Header />
        <LineGrid />
        <Header />
        <Line data={this.data} blur={this.blurHandler} change={this.countInChangeHandler}/>
        <Header />
      </div>
    );
  }

  countInChangeHandler = (e) => {
    this.setState({countIn: e.target.value})
  }

  blurHandler = () => {
    this.setState({
      totalIn: parseInt(this.state.countIn) + parseInt(this.state.add)
    })
  }
}

export default Grid;
