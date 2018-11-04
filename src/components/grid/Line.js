import React, { Component } from 'react';
import './Line.css';
import Field from './Field';

class Line extends Component {
  constructor(props){
    super(props);
    this.state = this.props.data
  }

  render() {
    return (
      <div className="Line">
        <Field value={this.state.countIn} blur={this.blurHandler} change={this.countInChangeHandler}></Field>
        <Field value={this.state.add} blur={this.blurHandler} change={this.addChangeHandler} color='#39E2A9'></Field>
        <Field value={this.state.totalIn} color='#00C7FB'></Field>
        <Field value={this.state.comp} color='#FF6243'></Field>
        <Field value={this.state.countOut}></Field>
        <Field value={this.state.totalSold} color='#00C7FB'></Field>
      </div>
    );
  }

  countInChangeHandler = (e) => {
    this.setState({countIn: e.target.value})
  }

  addChangeHandler = (e) => {
    this.setState({add: e.target.value})
  }

  blurHandler = () => {
    this.setState({totalIn: parseInt(this.state.countIn) + parseInt(this.state.add)})
  }
}

export default Line;
