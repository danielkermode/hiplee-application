import React from 'react';

const Button = props => (
  <button onClick={props.onClick}>
  {props.buttonText}
  </button>
);

export default Button;
