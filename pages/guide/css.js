import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SnbForGuide } from '../../components/layout/snb';
import Example from '../../components/components/Example';
import Code from '../../components/components/Code';

export default function index(props) {
  return (
    <>
      <SnbForGuide />
      <div className='contents-wrapper layout'>
        <Head>
          <title>KPP FRONTEND GUIDE</title>
          <meta name='description' content='Generated by create next app' />
        </Head>
        <section className='page-title'>
          <h3>CSS 컨벤션</h3>
          <p>- KPP PROJECT 에서 사용하는 CSS 코딩 규칙에 관한 설명</p>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>기본 CSS 파일 사용및 기술에 관한 규칙</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>CSS 파일을 import 하는 위치는 _app.js 상단입니다.</li>
              <li>
                _app.js 는 어플리케이션을 아우르는 <em> 상태의 최상단 </em>
                파일이라고 볼 수 있습니다.
              </li>
              <li>
                따라서, 이 부분에 import 한 CSS Style 의 범위는 전역입니다.
              </li>
              <li>
                별도로 특정 페이지나 Components 를 위한 개별 CSS 파일은 기술하지
                않았습니다.
              </li>
              <li>
                Jsx 를 이용한 Style 객체의 생성과 주입 또한 별도로 기술하지
                않았습니다.
              </li>
            </ul>
            <Example
              title=' : _app.js 상단'
              contents={
                <>
                  <img src='/img/css-import.png' alt='_app.js' />
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Custom Css Files</h4>
          </div>

          <div className='pannel-contents'>
            <ul>
              <li>
                앞서 설명한 이미지에서 Custom CSS 파일들을 제외한 것들은, 별도로
                주입한 라이브러리들에서 제공되는 것들입니다.
              </li>
              <li>
                각각의 Custom Css 파일들은 다음과 같은 용도를 하기 위하여
                작성되었습니다.
              </li>
            </ul>
            <Example
              title=' : /style/ 폴더 하위에 기술된 Custom CSS Group'
              contents={
                <>
                  <img src='/img/css-custom.png' alt='_app.js' />
                  <ul>
                    <li>
                      <span className='number'>1</span>
                      components.css : 반복되어 사용되는 요소들, 혹은 요소
                      그룹에 사용되는 Style 들을 지정하는 내용의 CSS
                    </li>
                    <li>
                      <span className='number'>2</span>
                      globals.css : 실제 어플리케이션 전체 페이지 곳곳에 사용될
                      Stlye 을 지정하는 내용의 CSS
                    </li>
                    <li>
                      <span className='number'>3</span>
                      reset.css : 자주 쓰이는 기본 태그들에 대한 브라우저 기본
                      Style 값을 Zero 로 선언하는 내용의 CSS
                    </li>
                    <li>
                      <span className='number'>4</span>
                      resource.css : font, color, animation 등 자주 사용되는
                      리소스 요소들을 선언하는 내용의 CSS
                    </li>
                    <li>
                      <span className='number'>5</span>
                      responsive.css : 선언된 Style 의 기준 화면보다 더 작거나,
                      비율이 다른 기기에 대응하기 위한 CS S
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Css Convention</h4>
          </div>

          <div className='pannel-contents'>
            <ul>
              <li>
                전체 KPP Coding Convention 는 <em> AirBnb 스타일 가이드 </em> 를
                따르고 있습니다.
              </li>
              <li>
                하지만 현재 CSS 의 경우, AirBnb CSS 스타일 가이드에 의존하지
                않으며 나름대로의 규칙을 가지고 독자적으로 작성되었습니다.
              </li>
              <li>
                유독 CSS 만 AirBnb 식의 가이드에서 벗어나 있는 이유는, 이미
                개발이 어느정도 완성된 단계에서 컨벤션을 지정하게 되었기
                때문입니다.
              </li>
              <li>
                때문에 이와 같은 사유로, CSS 작성 기법은 추후 .eslintrc.js &amp;
                .prettier.js 파일의 설정을 통하여 변경이 될 가능성이 있습니다.
              </li>
            </ul>
            <Example
              title=' : /style/global.css'
              contents={
                <>
                  <img src='/img/css-global.png' alt='글로벌 css' />
                  <ol>
                    <li>
                      <span className='number'>1</span>
                      <em>resource.css</em> 파일은 global.css 파일과
                      components.css 파일 최상단에 @import 하여 사용합니다.
                    </li>
                    <li>
                      <span className='number'>2</span>
                      스타일을 선언하는 주된 대상의 그룹이 변경되면 주석을
                      이용하여, 영역을 넓게 잡아 해당 스타일 그룹이 향하는
                      대상을 명시합니다.
                      <span className='more-explane'>
                        반드시 기억하세요, Style Sheet 가 향하는 대상이 분명하게
                        명시되지 않는다면 그것은 쓰레기의 집합일 뿐입니다.
                      </span>
                    </li>
                    <li>
                      <span className='number'>3</span>
                      주된 CSS 기술 방법은
                      <em> 가독성이 높은 한 줄 쓰기 방법 </em> 을 이용했습니다.
                      <span className='more-explane'>
                        이 부분은 작업자의 특성에 따라 선호도가 다른 부분입니다.
                        <br />
                        현재 KPP 프로젝트의 경우 CSS 파일을 페이지별로 분기하여
                        서술하지 않고 모든 페이지의 스타일을 하나의 파일에
                        기술하였습니다.
                        <br />
                        때문에 가독성이 더 높은 방법으로 빠르게 개발하였습니다.
                      </span>
                    </li>
                    <li>
                      <span className='number'>3</span>
                      scss 혹은 less 등의 전처리기들은 사용되지 않았습니다.
                    </li>
                    <li>
                      <span className='number'>4</span>
                      단어간 연결 문자로는 <em> -(hyphen) </em> 을 사용했습니다.
                    </li>
                    <li>
                      <span className='number'>5</span>
                      -(hyphen)으로 연결한 단어는 <em> 최대 4개 </em> 를 넘지
                      않도록 했습니다.
                    </li>
                    <li>
                      <span className='number'>6</span>특정요소에 상태 변화를
                      주기 위한 클래스로는 주로 <em> active </em> 클래스를
                      중첩하여 사용했습니다.
                    </li>
                  </ol>
                </>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
}
