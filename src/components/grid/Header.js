import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-label"><p></p></div>
        <div className="Header-title"><p>Count In</p></div>
        <div className="Header-title"><p>Add</p></div>
        <div className="Header-title"><p>Total In</p></div>
        <div className="Header-title"><p>Comp</p></div>
        <div className="Header-title"><p>Count Out</p></div>
        <div className="Header-title"><p>Total Sold</p></div>
      </div>
    );
  }
}

export default Header;
