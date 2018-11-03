import React, { Component } from 'react';
import './LineGrid.css';
import Field from './Field';

class LineGrid extends Component {
  state = {
    countIn: 0,
    add: 0,
    totalIn: 0,
    comp: 0,
    countOut: 0,
    totalSold: 0
  }

  render() {
    return (
      <div className="LineGrid">
        <Field value={this.state.countIn} blur={this.blurHandler} change={this.countInChangeHandler}></Field>
        <Field value={this.state.add} blur={this.blurHandler} change={this.addChangeHandler}></Field>
        <Field value={this.state.totalIn}></Field>
        <Field value={this.state.comp}></Field>
        <Field value={this.state.countOut}></Field>
        <Field value={this.state.totalSold}></Field>
      </div>
    );
  }

  addChangeHandler = (e) => {
    this.setState({add: e.target.value})
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

export default LineGrid;
