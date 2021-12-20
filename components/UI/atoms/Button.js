import React, { useState } from 'react';
import { IconButton } from '@mui/material';

/* 기본 Button */
//@ id : string
//@ className : string
//@ label : string
//@ value : string
//@ onClick : function
export default function DefaultButton(props) {
  const id = props.id ? props.id : '';
  const className = props.className ? props.className : '';
  const text = props.text ? props.text : '다음';
  const onClick = props.onClick ? props.onClick : null;
  return (
    <>
      <button
        {...props}
        id={id}
        className={`btn default ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

/* 카카오 로그인 버튼 */
export function KakaoLoginButton(props) {
  const onClick = props.onClick ? props.onClick : null;
  return (
    <>
      <button className='btn default kakao' onClick={onClick}>
        <img src='/img/signin/signin-kakao.svg' alt='카카오 아이콘' />
        카카오 로그인
      </button>
    </>
  );
}

/* 네이버 로그인 버튼 */
export function NaverLoginButton(props) {
  const onClick = props.onClick ? props.onClick : null;
  return (
    <>
      <button className='btn default naver' onClick={onClick}>
        <img src='/img/signin/signin-naver.svg' alt='네이버 아이콘' />
        네이버 로그인
      </button>
    </>
  );
}

/* 스텝형 PAGE UI 진행 버튼 */
//@ id : string
//@ className : string
//@ label : string
//@ text : string
//@ onClick : function
export function NextStepButton(props) {
  const id = props.id ? props.id : '';
  const className = props.className ? props.className : '';
  const text = props.text ? props.text : '다음';
  const onClick = props.onClick ? props.onClick : null;

  return (
    <>
      <button
        {...props}
        id={id}
        onClick={onClick}
        className={`btn step-btn ${className}`}
      >
        {text}
      </button>
    </>
  );
}

/* 아이콘 버튼 */
export function CustomIconButton(props) {
  //@ 버튼에 들어갈 클래스 : string
  const className = props.className ? props.className : '';

  //@ 버튼으로 사용될 아이콘 : object
  //  - 객체가 오지 않을 경우 기본 Info Icon 버튼 제공
  const icon = props.icon;

  return (
    <>
      <IconButton
        className={`btn icon-btn info-icon ${className}`}
        {...props}
        // aria-label={aria-label ? aria-label : "아이콘 버튼"}
      >
        {icon ? (
          icon
        ) : (
          <img src='/img/common/common-info.svg' alt='정보 아이콘' />
        )}
      </IconButton>
    </>
  );
}
