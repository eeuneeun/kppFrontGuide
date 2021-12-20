import React, { useState, useEffect } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DatePicker from 'react-datepicker';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/*******************
  
     SelectInput

********************/

export function BasicSelect(props) {
  const id = props.id ? props.id : '';
  const labeId = props.labeId ? props.labeId : '';
  const option = props.option
    ? props.option
    : [
        {
          value: 11111,
          text: '1111111',
        },
        {
          value: 2222,
          text: '2',
        },
        {
          value: 3,
          text: '3',
        },
      ];
  const placeholder = props.placeholder ? props.placeholder : '';
  const underPlaceholder = props.underPlaceholder ? props.underPlaceholder : '';

  const value = props.value;
  const setValue = props.setValue;

  function changeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <FormControl className='select-wrap'>
      <InputLabel shrink id={labeId}>
        {placeholder}
      </InputLabel>
      <Select labelId={labeId} id={id} value={value} onChange={changeHandler}>
        {option.map((item, idx) => (
          <MenuItem key={idx + item} value={item.value}>
            <em>{item.text}</em>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{underPlaceholder}</FormHelperText>
    </FormControl>
  );
}

/* 날짜 선택용 Input : Datepicker */
export function DateSelectInput(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      // locale={ko}
      className=''
      selected={startDate}
      dateFormat='yyyy-MM-dd'
      startDate={startDate}
      endDate={endDate}
      selectsRange
      // inline
      onChange={onChange}
      closeOnScroll={(e) => e.target === document}
    />
  );
}
