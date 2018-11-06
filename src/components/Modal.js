import React from "react";
import './Modal.css'

const Modal = ( props ) => {
  return (
    <div className={props.show ? "Modal display-block" : "Modal display-none"}>
      <section className="Modal-main">
        {props.children}
      </section>
    </div>
  );
};

export default Modal
