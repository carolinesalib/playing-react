import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-big"><p></p></div>
        <div className="Header-big"><p>Price</p></div>
        <div className="Header-default"><p>Count In</p></div>
        <div className="Header-default"><p>Add</p></div>
        <div className="Header-default"><p>Total In</p></div>
        <div className="Header-default"><p>Comp</p></div>
        <div className="Header-default"><p>Count Out</p></div>
        <div className="Header-default"><p>Total Sold</p></div>
        <div className="Header-big"><p>Gross</p></div>
      </div>
    );
  }
}

export default Header;
