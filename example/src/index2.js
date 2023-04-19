import React from 'react'
import 'bgbuttons/dist/index.css'
export const Button =({ type, children, ...rest }) => {
  let classNames = 'btn';

  switch (type) {
    case 'primary':
      classNames += ' btn-primary';
      break;
    case 'default':
      classNames += ' btn-default';
      break;
    case 'dashed':
      classNames += ' btn-dashed';
      break;
    case 'text':
      classNames += ' btn-text';
      break;
    case 'link':
      classNames += ' btn-link';
      break;
    default:
      classNames += ' btn-default';
      break;
  }

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};