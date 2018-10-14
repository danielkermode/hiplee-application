import React from 'react';

const Button = props => (
  <div className='buttoncontainer'>
    <button onClick={props.onClick}>
    {props.buttonText}
    </button>
  </div>
);

export default Button;
