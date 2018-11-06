import React, { Component } from "react";
import './Poster.css'
import Modal from './Modal'

class Poster extends Component {
  state = {
    show: false,
    label: '',
    price: 0
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addNewLine = () => {
    this.props.addNewLine(this.state.label, this.state.price)
    this.hideModal()
  }

  changeLabelHandler = (e) => {
    this.setState({label: e.target.value})
  }

  changePriceHandler = (e) => {
    this.setState({price: e.target.value})
  }

  render() {
    return (
      <div className="Poster">
        <span>Poster</span>
        <img src='https://ae01.alicdn.com/kf/HTB1cppzSFXXXXcGXpXXq6xXFXXX6/-.jpg_640x640.jpg' alt='Green Day Poster' />
        <button onClick={this.showModal}>Add other type of poster</button>

        <Modal show={this.state.show}>
          <div className='Modal-form'>
            <div className='Modal-group'>
              <span>Label</span>
              <input value={this.state.label} onChange={this.changeLabelHandler}></input>
            </div>
            <div className='Modal-group'>
              <span>Price</span>
              <input value={this.state.price} onChange={this.changePriceHandler} type='number'></input>
            </div>
            <button onClick={this.addNewLine}>Add</button>
            <button onClick={this.hideModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Poster
