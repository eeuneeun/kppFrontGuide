import React, { useState } from 'react';
import DefaultButton from '../atoms/Button';
import { DefaultTextInput } from '../atoms/TextInput';
import { ValidationMsg } from '../atoms/ValidationMsg';

/* 분자 단위의 Input 을 감싸는 단 한개의 Input Pair 정의 */

/* 하단에 유효성 검사 문구가 뜨는 TextInput Pair */
export function InputPairWithValidataion(props) {
  //@ className : string
  //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
  const className = props.className ? props.className : '';

  //@ onChange : function
  const onChange = props.onChange ? props.onChange : null;

  //@ valMsg : string
  //  - valMsg 자리에 들어갈 에러 메시지
  const valMsg = props.valMsg ? props.valMsg : '';

  //@ valMsg : string
  const TextInput = props.TextInput
    ? props.TextInput
    : {
        id: '',
        className: '',
        name: '',
        label: '',
        placeholder: '',
        onChange: null,
      };

  return (
    <>
      <section className={className}>
        <DefaultTextInput
          id={TextInput.id}
          className={TextInput.className}
          name={TextInput.name}
          label={TextInput.label}
          placeholder={TextInput.placeholder}
          onChange={TextInput.onChange}
        />
        <ValidationMsg valMsg={valMsg} />
      </section>
    </>
  );
}

/* 좌측에 타이틀, 우측에 버튼이 있는 TextInput Pair */
export function InputPairWithTitleAndButton(props) {
  //@ className : string
  //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
  const className = props.className;

  //@ wrapTitle : string
  //  - dt 자리에 들어갈 타이틀
  //  - 해당 input pair 그룹의 이름
  const wrapTitle = props.wrapTitle;

  //@ wrapCont : string
  //  - dd 자리에 들어갈 컨텐츠
  //  - 특정 Input 컴포넌트, 혹은 Input 컴포넌트의 그룹
  const wrapCont = props.wrapCont;

  //@ onChange : function
  const onChange = props.onChange;

  return (
    <>
      <dl className={`input-wrap text ${className ? className : ''}`}>
        <dt className={`input-wrap-title`}>{wrapTitle ? wrapTitle : '검색'}</dt>
        <dd className={`input-wrap-cont`}>
          {wrapCont ? (
            wrapCont
          ) : (
            <DefaultTextInput
              className='width-40'
              label={wrapTitle ? wrapTitle : '검색'}
              onChange={onChange ? onChange : ''}
            />
          )}
          <DefaultButton btnText='검색' />
        </dd>
      </dl>
    </>
  );
}

/* BasicTextInput Wrap Box */
export function TextInputWrap(props) {
  //@ className : string
  //  - wrapper 가 어떤 스타일이 될 것인지 class 로 정의하여 주입
  const className = props.className;

  //@ wrapTitle : string
  //  - dt 자리에 들어갈 타이틀
  //  - 해당 input 그룹의 이름
  const wrapTitle = props.wrapTitle;

  //@ wrapCont : string
  //  - dd 자리에 들어갈 컨텐츠
  //  - 특정 Input 컴포넌트, 혹은 Input 컴포넌트의 그룹
  const wrapCont = props.wrapCont;

  //@ onChange : function
  const onChange = props.onChange;

  return (
    <>
      <dl className={`input-wrap text ${className ? className : ''}`}>
        <dt className={`input-wrap-title`}>{wrapTitle ? wrapTitle : '검색'}</dt>
        <dd className={`input-wrap-cont`}>
          {wrapCont ? (
            wrapCont
          ) : (
            <BasicTextInput
              className='width-80'
              label={wrapTitle ? wrapTitle : '검색'}
              onChange={onChange ? onChange : ''}
            />
          )}
        </dd>
      </dl>
    </>
  );
}
