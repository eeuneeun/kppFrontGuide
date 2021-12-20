import React, { useState, useEffect } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

/* 원자 단위의 Input 그룹 정의 */

/*******************
  
      CheckBox

********************/

/* 기본 체크박스 */
//@ id : string
//@ className : string
//@ label : string
//@ value : string
//@ onClick : function
//@ onChange : function
export function DefaultChekbox(props) {
  const value = props.value ? props.value : '';
  const label = props.label ? props.label : '';
  const id = props.id ? props.id : 'basicCheckBox';
  const className = props.className ? props.className : '';
  const onClick = props.onClick ? props.onClick : null;
  const onChange = props.onChange ? props.onChange : null;

  return (
    <div className='basic-checkbox-wrap flex-center'>
      <input
        {...props}
        type='checkbox'
        id={id}
        value={value}
        className={`basic-checkbox ${className}`}
        onChange={onChange}
        onClick={onClick}
      />
      <label htmlFor={id}></label>
      <span className=''>{label}</span>
    </div>
  );
}

export function MuiChekbox(props) {
  //@ id : string
  const id = props.id;

  //@ label : string
  const label = props.label;

  //@ label : string
  const labelPlacement = props.labelPlacement;

  //@ checked : boolean
  const checked = props.checked;

  //@ onChange : function
  const onChange = props.onChange;

  //@ icon : object
  const icon = props.icon;

  //@ checkedIcon : object
  const checkedIcon = props.checkedIcon;

  /* state */
  const [chked, setIschked] = useState(false);

  /* function */
  function chkHandler(e) {
    setIschked(e.target.checked);
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id && id}
          checked={checked}
          onChange={onChange}
          icon={icon ? icon : <CheckBoxOutlineBlankIcon fontSize='medium' />}
          checkedIcon={
            checkedIcon ? checkedIcon : <CheckBoxIcon fontSize='medium' />
          }
        />
      }
      label={label ? label : ''}
      labelPlacement={labelPlacement ? labelPlacement : 'end'}
    />
  );
}
