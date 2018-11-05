import React from 'react';
import './Footer.css';

const Footer = ( props ) => {
  return (
    <div className="Footer">
      <div className="Footer-label"><p></p></div>
      <div className="Footer-text"><p></p></div>
      <div className="Footer-text"><p></p></div>
      <div className="Footer-text"><p style={{ color: '#00C7FB' }}>{props.totals.totalIn}</p></div>
      <div className="Footer-text"><p style={{ color: '#FF6243' }}>{props.totals.comp}</p></div>
      <div className="Footer-text"><p>{props.totals.countOut}</p></div>
      <div className="Footer-text"><p style={{ color: '#00C7FB' }}>{props.totals.totalSold}</p></div>
    </div>
  );
}

export default Footer;
