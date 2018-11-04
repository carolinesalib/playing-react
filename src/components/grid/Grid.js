import React, { Component } from 'react';
import Header from './Header';
import Line from './Line';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [
        { countIn: 0, add: 0, totalIn: 0, comp: 0, countOut: 0, totalSold: 0 }
      ]
    };
  }

  render() {
    return (
      <div className="Grid">
        <Header />
        {this.state.lines.map((line, index) => {
          return <Line data={line} onBlur={() => this.handleBlur(index)} key={index} />
        })}
      </div>
    );
  }
}

export default Grid;
