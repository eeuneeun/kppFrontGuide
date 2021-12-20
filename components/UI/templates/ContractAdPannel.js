/* React */
import React, { useState } from 'react';

/* Next JS */
import Link from 'next/link';
import router from 'next/router';

/* Redux */
import { useSelector } from 'react-redux';

/* UI Components */
import DefaultButton from '../atoms/Button';

//@ 계약 유도 광고 패널
// - 서비스 미가입자에게 보여지는 광고 패널 컴포넌트
export default function ContractAdPannel(props) {
  //@ 패널 ID : string
  const id = props.id;

  //@ 패널 클래스 : string
  const className = props.className;

  /* Redux : authSlice 관련 선언부 */
  const {
    isMember, // - 멤버 여부
  } = useSelector((state) => ({
    isMember: state.authSlice.isMember,
  }));

  return (
    <>
      <div
        id={id && id}
        className={`${isMember ? '' : 'display-none'} contract pannel ${
          className ? className : ''
        }`}
      >
        <div className='pannel-container flex-col-center'>
          <ul>
            <li>
              <em className='theme-color'>안녕하세요! 홍길동 회원님!</em>
            </li>

            <li>발전소 모니터링과 KPP멤버십을 이용하려면</li>
            <li>KPP 서비스 가입이 필요합니다.</li>
            <li>KPP 서비스에 가입해 다양한 혜택을 받으세요.</li>
          </ul>

          <DefaultButton
            text='가입하기'
            className='join round'
            onClick={() => router.push('/subscribe/create')}
          />
        </div>
      </div>
    </>
  );
}
