import React from 'react';
import './Field.css';

const Field = ( props ) => {
  return (
    <div className="Field">
      <div className="Field-header">
        <span className="Field-title"></span>
      </div>
      <input
        className="Field-input"
        type="text"
        type="number"
        onChange={props.change}
        value={props.value}
        style={{ color: props.color || '#BEBEC1' }}
        readOnly={props.change ? false : true}
      />
    </div>
  );
}

export default Field;
