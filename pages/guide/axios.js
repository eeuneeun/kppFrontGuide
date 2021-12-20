import Head from 'next/head';
import Example from '../../components/components/Example';
import Code from '../../components/components/Code';

import { SnbForGuide } from '../../components/layout/snb';

export default function index(props) {
  return (
    <>
      <SnbForGuide />
      <div className='contents-wrapper axios'>
        <Head>
          <title>KPP FRONTEND GUIDE</title>
        </Head>
        <section className='page-title'>
          <h3>Axios API 호출 패턴</h3>
          <p>- KPP PROJECT 에서 사용하는 Axios API 호출 패턴에 관한 설명</p>
        </section>

        <section className='pannel'>
          <div className='pannel-header'>
            <h4>Custom Axios 객체</h4>
          </div>
          <div className='pannel-contents'>
            <ul>
              <li>
                KPP Project 에서 모든 REST API 호출은 Axios 라이브러리를
                이용합니다.
              </li>
              <li>
                Custom Axios 객체는 API 호출시마다 반복되어 기술되어야 하는 인자
                값에 대한 정보의 양을 줄여주기 위해 고안 되었습니다.
              </li>
              <li>
                {' '}
                Custom Axios 객체는 고차함수(HOC) 의 형태를 띄고 있으며, 공통
                인자 정보 이외에도 REST API 호출시에 반복적으로 나타나는 유형의
                에러 예외처리 기능도 있습니다.
              </li>
            </ul>

            <ol className='example-list'>
              <li>
                <Example
                  title=' : CustomAxios.js'
                  contents={
                    <>
                      <Code
                        contents={`/* Library */
import axios from 'axios';

// @ 공통적으로 쓰이는 내용들을 적용한 Axios 객체
const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});

// @ 401 error 공통 처리를 위한 고차 함수
// - param : object
export default async function CustomAxios(param) {
  const result = await axiosInstance(param)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      if (e.response.status == 401) {
        console.log('로그인 유지 시간이 지나, 로그인 페이지로 이동합니다!');
        return e.response.status;
      }
    });
  return result;
}`}
                      />
                    </>
                  }
                />
              </li>
              <li>
                <Example
                  title=' : CustomAxios 를 통한 호출'
                  contents={
                    <>
                      <Code
                        contents={`import CustomAxios from '../../components/utils/CustomAxios';
                        
async function getSlides() {
  const API_URL = process.env.NEXT_PUBLIC_NEST_API_URL;
  const slideApiParams = {
    url: API_URL + 'slides',
    method: 'get',
    headers: {
      authorization: accToken,
    },
  };

  const result = await CustomAxios(slideApiParams);

  if (result == 401) {
    dispatch(setIsLogin(false));
  } else if (result.status == 200) {
    setSlideCont(result.data.reverse());
  } else {
    console.log(result);
  }
}`}
                      />
                    </>
                  }
                />
              </li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
