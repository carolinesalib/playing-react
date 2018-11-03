import React from 'react';
import './Line.css';
import Field from './Field';

const Line = ( props ) => {
  return (
    <div className="Line">
      <Field value={props.data.countIn} onChange={props.change} onBlur={props.blur} ></Field>
      <Field value={props.data.add}></Field>
      <Field value={props.data.totalIn}></Field>
      <Field value={props.data.comp}></Field>
      <Field value={props.data.countOut}></Field>
      <Field value={props.data.totalSold}></Field>
    </div>
  );
}

export default Line;
