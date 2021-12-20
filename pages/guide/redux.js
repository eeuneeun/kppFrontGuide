import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SnbForGuide } from '../../components/layout/snb';
import Example from '../../components/components/Example';
import Code from '../../components/components/Code';
import Link from 'next/link';

export default function index(props) {
  return (
    <>
      <SnbForGuide />
      <div className='contents-wrapper redux'>
        <Head>
          <title>KPP FRONTEND GUIDE</title>
          <meta name='description' content='Generated by create next app' />
        </Head>
        <section className='page-title'>
          <h3>REDUX 구조</h3>
          <p>
            - KPP PROJECT 에서 사용하는 Redux 에 관한 구조와 상태관리 규칙에대한
            설명
          </p>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Redux 소개</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                Redux 는 다수의 대형 React 프로젝트에서 사용된 바 있는 검증된
                상태관리 컨테이너입니다.
              </li>
              <li>
                Redux는 &#34; 예측가능한, 중앙화된, 쉬운 디버깅의, 유연한 &#34;
                네 가지 키워드로 그 핵심을 쉽게 파악 할 수 있습니다.
              </li>
              <li>
                Redux는 의존성 라이브러리를 포함하여 총 2kB 정도로 그 크기는
                매우 작지만, 파워풀한 애드온입니다.
              </li>
              <li>
                또한 Redux는 React에 의존하지 않으며, Vue, Angular 나 다른
                Native JS App 과 함께 사용 할 수도 있습니다.
              </li>
              <li>
                이 프로젝트를 진행하며 주로 참고한 Redux 자습서의 주소는 아래와
                같습니다.
              </li>
            </ul>
            <Example
              title=' : 참고 URL'
              contents={
                <>
                  <ol>
                    <li>
                      <span className='number'>1</span>
                      <Link href='https://ko.redux.js.org/introduction/getting-started'>
                        <a>
                          한국 Redux 공식 홈페이지 :
                          https://ko.redux.js.org/introduction/getting-started
                        </a>
                      </Link>
                    </li>

                    <li>
                      <span className='number'>2</span>
                      <Link href='https://redux-toolkit.js.org/'>
                        <a>
                          Redux Toolkit 자습서 : https://redux-toolkit.js.org/
                        </a>
                      </Link>
                    </li>

                    <li>
                      <span className='number'>3</span>
                      <Link href='https://github.com/kirill-konshin/next-redux-wrapper'>
                        <a>
                          Next Redux Wrapper Github :
                          https://github.com/kirill-konshin/next-redux-wrapper
                        </a>
                      </Link>
                    </li>
                  </ol>
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Next JS 에 Redux 설치</h4>
          </div>

          <div className='pannel-contents'>
            <ul>
              <li>
                기존에 React 에서 Redux 를 사용하기 위해 만들었던 react-redux 의
                경우 Next JS 의 구조와 맞지 않는 부분이 존재합니다.
              </li>
              <li>
                Next JS 에서 React 를 사용하기 위해서는 next-redux-wrapper 라는
                별도의 라이브러리를 설치하여 최상단인 _app.js 를 감싸주는 과정이
                필요합니다.
              </li>
              <li>
                next-redux-wrapper 라이브러리를 열어보면, 이것이 상태관리를 위한
                아주 새로운 코드가 아니라 단순히 next JS 를 감싸는 HOC 임을 알
                수 있습니다.
              </li>
              <li>
                우선, 설치를 위해서는 다음의 하단의 코드를 복사하여 프로젝트
                경로의 터미널에 붙여 넣어 줍니다.
              </li>
            </ul>
            <Example
              title=' : 패키지 매니저 npm 을 이용하여 터미널에 아래의 명령어 입력'
              contents={
                <>
                  <Code
                    contents={`npm install redux react-redux
npm install next-redux-wrapper`}
                  />
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>기본 Redux Settings</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                상위의 설명과 같이 redux, react-redux, next-redux-wrapper 설치가
                끝났다면,
              </li>
              <li>
                <span className='number'>1</span>
                먼저 루트에 store 디렉토리를 만들고 그바로 아래에 stroe.js 와
                rootReducer.js 파일을 생성합니다.
              </li>
              <li>
                <span className='number'>2</span>
                stroe.js 파일 안에 createWrapper 함수를 호출하여 wrapper 객체를
                만들어줍니다.
              </li>
              <li>
                <span className='number'>3</span>
                _app.js 파일에 아래와 같이 HOC 인 wrapper 객체를 호출하여, 앱의
                최 상단 함수를 감싸는 코드 를 작성해줍니다.
              </li>
            </ul>
            <Example
              title='_app.js 에 redux-wrapper 적용'
              contents={
                <>
                  <ul className='order-img'>
                    <li>
                      <span className='number'>1</span>
                      <img src='/img/store-dir.png' alt='store 디렉토리 생성' />
                    </li>
                    <li>
                      <span className='number'>2</span>
                      <img src='/img/store.png' alt='store.js 작성' />
                    </li>
                    <li>
                      <span className='number'>3</span>
                      <img
                        src='/img/redux.png'
                        alt='_app.js 에 redux-wrapper 적용'
                      />
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
}
