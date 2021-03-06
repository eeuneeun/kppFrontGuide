import React, { useState } from 'react';
import Head from 'next/head';
import Example from '../../../components/components/Example';
import Code from '../../../components/components/Code';
import { SnbForSamlpe } from '../../../components/layout/snb';
import {
  DefaultChekbox,
  MuiChekbox,
} from '../../../components/UI/atoms/CheckBox';

export default function Checkbox(props) {
  return (
    <>
      <SnbForSamlpe />
      <div className='contents-wrapper layout'>
        <Head>
          <title>KPP CHECKBOX SAMPLE</title>
          <meta name='description' content='Generated by create next app' />
        </Head>
        <section className='page-title'>
          <h3>KPP CHECKBOX SAMPLE</h3>
          <p>
            - KPP PROJECT 에서 자주 사용 되는 체크박스 UI 를 컴포넌트로 만들어
            재사용 했습니다.
          </p>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Default Chekbox</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                가장 많이 사용 하는 형태의 체크박스를 컴포넌트화 했습니다.
              </li>
              <li>
                id, className, label, onClick 등의 간단한 props 요소들을
                이용하여 여러 형태의 체크박스로 응용하여 사용 할 수 있습니다.
              </li>
            </ul>
            <Example
              title=' : 기본 CheckBox 호출'
              contents={
                <>
                  <div className='flex-start align-start'>
                    <DefaultChekbox
                      checked={true}
                      value='체크를 원하는 값'
                      label='체크를 원하는 타이틀 입력'
                    />
                  </div>
                  <Code
                    contents={`import { DefaultChekbox } from '../../../components/UI/atoms/CheckBox';

<DefaultChekbox
  checked={true}
  value='체크를 원하는 값'
  label='체크를 원하는 타이틀 입력'
/>`}
                  />
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Mui Chekbox</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                Mui 에서 제공하는 기본 형태의 체크박스를 컴포넌트화 했습니다.
              </li>
              <li>
                애니메이션이 아름다우며, id, className, text, onClick 등의
                간단한 props 요소들을 이용하여 여러 형태의 체크박스로 응용하여
                사용 할 수 있습니다.
              </li>
            </ul>
            <Example
              title=' : Mui CheckBox 호출'
              contents={
                <>
                  <div className='flex-start align-start'>
                    <MuiChekbox
                      checked={true}
                      value='체크를 원하는 값'
                      label='체크를 원하는 타이틀 입력'
                    />
                  </div>
                  <Code
                    contents={`import { MuiChekbox } from '../../../components/UI/atoms/CheckBox';

<MuiChekbox
  checked={true}
  value='체크를 원하는 값'
  label='체크를 원하는 타이틀 입력'
/>`}
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
