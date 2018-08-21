import React from 'react';
import classes from './Modal.css';

export default (props) => (
  <div className={classes.ModalWrapper}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      }}>
    <div className={classes.Modal}>
      {props.children}
    </div>
  </div>
);