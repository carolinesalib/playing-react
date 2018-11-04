import React from 'react';
import './Field.css';

const Field = ( props ) => {
  return (
    <div className="Field">
      <form className="Field-form" onBlur={props.blur}>
        <div className="Field-header">
          <span className="Field-title"></span>
        </div>
        <input
          className="Field-input"
          type="text"
          type="number"
          onChange={props.change}
          value={props.value}
          style={{ color: props.color || 'grey' }}
          readOnly={props.change ? false : true}
        />
      </form>
    </div>
  );
}

export default Field;
