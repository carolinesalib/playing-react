import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Line from './Line';
import update from 'immutability-helper';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [
        { label: 'Default', price: 10, countIn: 0, add: 0, totalIn: 0, comp: 0, countOut: 0, totalSold: 0, totalPrice: 0 },
        { label: 'Other size', price: 10, countIn: 0, add: 0, totalIn: 0, comp: 0, countOut: 0, totalSold: 0, totalPrice: 0 },
      ],
      totals: { totalIn: 0, comp: 0, countOut: 0, totalSold: 0, totalPrice: 0 }
    };
  }

  render() {
    return (
      <div className="Grid">
        <Header />
        {this.state.lines.map((line, index) => {
          return <Line data={line} updateLineData={this.updateLineData} key={index} id={index} showLabel={this.state.lines.length > 1} />
        })}
        <Footer totals={this.state.totals} />
      </div>
    );
  }

  updateLineData = (index, data) => {
    var totalIn = parseInt(data.countIn) + parseInt(data.add)
    var totalSold = totalIn - parseInt(data.comp) - parseInt(data.countOut)
    var totalPrice = totalSold * data.price

    var updatedLines = update(
      this.state.lines, {
        [index]: {
          $set: {
            countIn: data.countIn,
            add: data.add,
            totalIn: totalIn,
            comp: data.comp,
            countOut: data.countOut,
            totalSold: totalSold,
            totalPrice: totalPrice
          }
        }
      }
    )

    this.setState({
      lines: updatedLines
    })

    this.setTotals(updatedLines)
  }

  setTotals = (lines) => {
    var totalIn = 0
    var comp = 0
    var countOut = 0
    var totalSold = 0
    var totalPrice = 0

    lines.map(line => {
      totalIn += parseInt(line.totalIn)
      comp += parseInt(line.comp)
      countOut += parseInt(line.countOut)
      totalSold += parseInt(line.totalSold)
      totalPrice += parseInt(line.totalPrice)
    })

    this.setState({totals: { totalIn: totalIn, comp: comp, countOut: countOut, totalSold: totalSold, totalPrice: totalPrice }})
  }
}

export default Grid;
