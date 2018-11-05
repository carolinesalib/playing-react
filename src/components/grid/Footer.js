import React from 'react';
import './Footer.css';

const Footer = ( props ) => {
  return (
    <div className="Footer">
      <div className="Footer-big"><p></p></div>
      <div className="Footer-big"><p></p></div>
      <div className="Footer-default"><p></p></div>
      <div className="Footer-default"><p></p></div>
      <div className="Footer-default"><p style={{ color: '#00C7FB' }}>{props.totals.totalIn}</p></div>
      <div className="Footer-default"><p style={{ color: '#FF6243' }}>{props.totals.comp}</p></div>
      <div className="Footer-default"><p>{props.totals.countOut}</p></div>
      <div className="Footer-default"><p style={{ color: '#00C7FB' }}>{props.totals.totalSold}</p></div>
      <div className="Footer-big"><p style={{ color: '#00C7FB' }}>{'$'+props.totals.totalPrice}</p></div>
    </div>
  );
}

export default Footer;
