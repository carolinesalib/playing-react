import React from 'react';
import './Field.css';
import CurrencyFormat from 'react-currency-format';

const Field = ( props ) => {
  return (
    <div className="Field">
      <div className="Field-header">
        <span className="Field-title"></span>
      </div>
      <CurrencyFormat
        className="Field-input"
        type="text"
        onChange={props.change}
        value={props.value}
        prefix={props.prefix}
        readOnly={props.change ? false : true}
        style={{
          color: props.color || '#BEBEC1',
          width: props.width || '100px'
        }}
      />
    </div>
  );
}

export default Field;
