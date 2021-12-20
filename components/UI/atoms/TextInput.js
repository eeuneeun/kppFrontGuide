import React, { useState, useEffect } from 'react';

import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

/*******************
  
      TextInput

********************/

/* Default Text Input */
//@ id : string
//@ className : string
//@ name : string
//@ label : string
//@ placeholder : string
//@ onChange : function
export function DefaultTextInput(props) {
  const type = props.type ? props.type : 'text';
  const label = props.label ? props.label : '';
  const placeholder = props.placeholder ? props.placeholder : '';
  const id = props.id ? props.id : '';
  const name = props.name ? props.name : '';
  const className = props.className ? props.className : '';
  const onChange = props.onChange ? props.onChange : null;
  const onBlur = props.onBlur ? props.onBlur : null;
  const rightIcon = props.rightIcon ? props.rightIcon : null;

  return (
    <input
      {...props}
      type={type}
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      className={`basic-text-input ${className}`}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

/* 상단에 Placehoder 가 유지되는 Custom Text Input */
//@ id : string
//@ className : string
//@ wrapperClassName : string
//@ name : string
//@ label : string
//@ placeholder : string
//@ error : boolean
export function ResetTextInput(props) {
  const id = props.id;
  const className = props.className;
  const wrapperClassName = props.wrapperClassName;
  const name = props.name;
  const label = props.label;
  const placeholder = props.placeholder;
  const error = props.error;

  const [isResetBtnShowLocal, setIsResetBtnShowLocal] = useState(false);

  const isResetBtnShow = props.isResetBtnShow
    ? props.isResetBtnShow
    : isResetBtnShowLocal;
  const setIsResetBtnShow = props.setIsResetBtnShow
    ? props.setIsResetBtnShow
    : setIsResetBtnShowLocal;

  function reset() {
    const thisInput = document.getElementById([id]);
    thisInput.value = null;
    props.setIsValOk && props.setIsValOk(false);
    setIsResetBtnShow(false);
  }

  useEffect(() => {
    console.log(isResetBtnShow);
  }, [isResetBtnShow]);

  return (
    <div
      className={`custom-text-input-wrap ${
        wrapperClassName ? wrapperClassName : ''
      }`}
    >
      <TextField
        name={name && name}
        error={error && error}
        id={id && id}
        label={label && label}
        placeholder={placeholder && placeholder}
        className={`mui-text-input ${className ? className : ''}`}
        {...props}
      />
      <button
        className={`remove-text-btn ${isResetBtnShow ? 'active' : ''}`}
        onClick={reset}
      >
        <img src='/img/common/common_remove_text.png' alt='입력값 초기화' />
      </button>
    </div>
  );
}

/*******************
  
     SearchInput

********************/

/* 검색용 Text Input */
export function SearchInput(props) {
  //@ placeholder : string
  const placeholder = props.placeholder;

  //@ id : string
  const id = props.id;

  //@ name : string
  const name = props.name;

  //@ className : string
  const className = props.className;
  const classNameForIcon = props.classNameForIcon;

  //@ onChange : function
  const onChange = props.onChange;

  return (
    <div className='search-input-wrap'>
      <InputBase
        id={id && id}
        className={className && className}
        placeholder={placeholder && placeholder}
        name={name && name}
        inputProps={{ 'aria-label': '내 발전소 검색' }}
      />

      <IconButton
        type='submit'
        className={classNameForIcon && classNameForIcon}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
