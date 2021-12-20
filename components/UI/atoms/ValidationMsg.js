import React from 'react';

export function ValidationMsg(props) {
  const valMsg = props.valMsg ? props.valMsg : '';

  return <p className='validation-msg'>{valMsg}</p>;
}

export function ErrorMsg(props) {
  const errMsg = props.errMsg ? props.errMsg : '';

  return <p className='error-msg'>{errMsg}</p>;
}
