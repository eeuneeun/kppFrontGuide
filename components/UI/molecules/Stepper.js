import React, { useState } from 'react';

/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { setNowStep } from '/store/reducers/pageSlice.js';

//@ 스텝퍼
//  : 등록 폼에서 사용되는 단계별 진행 표현
export default function HeaderStepper(props) {
  //@ 스텝퍼 클래스 : string
  const className = props.className ? props.className : '';

  //@ 총 단계 : number
  const totalStep = props.totalStep ? props.totalStep : 1;

  //@ 현재 단계 : number
  //  - 현재 몇 단계인지 표현 1, 2...
  const { nowStep } = useSelector((state) => ({
    nowStep: state.pageSlice.nowStep,
  }));

  //@ 스테퍼 아이템 렌더링 : function
  function getStepperItem() {
    const liEL = [];
    console.log(nowStep);
    for (let i = 1; i <= totalStep; i++) {
      liEL.push(
        <li key={`idx${i}`} className={i <= nowStep ? 'active' : ''}></li>
      );
    }

    return liEL;
  }

  return (
    <>
      <ul className={`flex-center stepper-wrap ${className}`}>
        {getStepperItem()}
      </ul>
    </>
  );
}
