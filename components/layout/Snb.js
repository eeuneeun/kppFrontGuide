import Link from 'next/link';

export function SnbForFolder() {
  return (
    <nav className='snb'>
      <section>
        <h2>KPP 기본 폴더 구조</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/folder/front'>
              <a>KPP NEXTJS FRONTEND</a>
            </Link>
          </li>
          <li>
            <Link href='/folder/back'>
              <a>KPP NESTJS BACKEND</a>
            </Link>
          </li>
        </ol>
      </section>
    </nav>
  );
}

export function SnbForGuide() {
  return (
    <nav className='snb'>
      <section>
        <h2>KPP 가이드 라인</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/guide/layout'>
              <a>화면 레이아웃 구조</a>
            </Link>
          </li>
          <li>
            <Link href='/guide/css'>
              <a>CSS 작업 규칙</a>
            </Link>
          </li>
          <li>
            <Link href='/guide/redux'>
              <a>Redux 디자인 패턴</a>
            </Link>
          </li>
          <li>
            <Link href='/guide/axios'>
              <a>Axios API 호출 패턴</a>
            </Link>
          </li>
        </ol>
      </section>
    </nav>
  );
}

export function SnbForSamlpe() {
  return (
    <nav className='snb'>
      <section>
        <h2>ATOMS</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/atoms/button'>
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/badge'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/switch'>
              <a>Switch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/textInput'>
              <a>TextInput</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/valmsg'>
              <a>ValidationMsg</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atoms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
        </ol>
      </section>

      <section>
        <h2>MOLECULES</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/molecules'>
              <a>BreadScrumb</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules'>
              <a>BtnWrap</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/'>
              <a>InputPair</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/'>
              <a>MiddleTitle</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/stepper'>
              <a>Stepper</a>
            </Link>
          </li>
        </ol>
      </section>

      <section>
        <h2>ORGANISMS</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/organisms/boardList'>
              <a>BoardList</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/calendar'>
              <a>Calendar</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/checkbox'>
              <a>Chart</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>Modal</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/valmsg'>
              <a>PageTab</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/switch'>
              <a>Popper</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>PlantSearch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/textInput'>
              <a>Slider</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>Spinner</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>ZipCode</a>
            </Link>
          </li>
        </ol>
      </section>

      <section>
        <h2>TEMPLATE</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/organisms/button'>
              <a>ContractAdPannel</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/badge'>
              <a>FormTemplate</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>PlantList</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/switch'>
              <a>RealTimeInfo</a>
            </Link>
          </li>
        </ol>
      </section>
    </nav>
  );
}
