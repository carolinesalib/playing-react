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
      <div className="Line" onBlur={this.blurHandler}>
        <p className="Line-label">{this.props.showLabel ? this.state.label : null}</p>
        <Field value={this.state.countIn} change={this.countInChangeHandler}></Field>
        <Field value={this.state.add} change={this.addChangeHandler} color='#39E2A9'></Field>
        <Field value={this.state.totalIn} color='#00C7FB'></Field>
        <Field value={this.state.comp} change={this.compChangeHandler} color='#FF6243'></Field>
        <Field value={this.state.countOut} change={this.countOutChangeHandler}></Field>
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

  compChangeHandler = (e) => {
    this.setState({comp: e.target.value})
  }

  countOutChangeHandler = (e) => {
    this.setState({countOut: e.target.value})
  }

  blurHandler = () => {
    this.setState({totalIn: parseInt(this.state.countIn) + parseInt(this.state.add)})
    this.setState({totalSold: parseInt(this.state.totalIn) - parseInt(this.state.comp) - parseInt(this.state.countOut)})

    this.props.updateLineData(this.props.id, this.state);
  }
}

export default Line;
