import React, { useState } from 'react';
import Head from 'next/head';
import Example from '../../../components/components/Example';
import Code from '../../../components/components/Code';
import { SnbForSamlpe } from '../../../components/layout/snb';
import {
  BasicSelect,
  DateSelectInput,
} from '../../../components/UI/atoms/SelectBox';

export default function SelectBox(props) {
  return (
    <>
      <SnbForSamlpe />
      <div className='contents-wrapper layout'>
        <Head>
          <title>KPP SELECTBOX SAMPLE</title>
          <meta name='description' content='Generated by create next app' />
        </Head>
        <section className='page-title'>
          <h3>KPP SELECTBOX SAMPLE</h3>
          <p>
            - KPP PROJECT 에서 자주 사용 되는 SELECTBOX UI 를 컴포넌트로 만들어
            재사용 했습니다.
          </p>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Basic Select</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                가장 많이 사용 하는 형태의 셀렉박스를 컴포넌트화 했습니다.
              </li>
              <li>
                id, className, label, onClick 등의 간단한 props 요소들을
                이용하여 여러 형태의 셀렉박스로 응용하여 사용 할 수 있습니다
              </li>
              <li>
                하지만, 완전히 새로운 형태의 디자인이 나오면 새로운 컴포넌트를
                만들어야 합니다.
              </li>
            </ul>
            <Example
              title=' : 기본 Basic Select 호출'
              contents={
                <>
                  <div className='flex-start align-start'>
                    <BasicSelect />
                  </div>
                  <Code
                    contents={`import { BasicSelect } from '../../../components/UI/atoms/SelectBox';

<BasicSelect />`}
                  />
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Date Select Input</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>누르면 달력이 나오는 형태의 셀렉트 박스 컴포넌트입니다.</li>
              <li>
                이 기본 컴포넌트를 약간 변형하여 필요한 부분에 사용이
                가능합니다.
              </li>
            </ul>
            <Example
              title=' : 기본 Date Select Input 호출'
              contents={
                <>
                  <div className='flex-start align-start'>
                    <DateSelectInput />
                  </div>
                  <Code
                    contents={`import { DateSelectInput } from '../../../components/UI/atoms/SelectBox';

<DateSelectInput />`}
                  />
                </>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
}
