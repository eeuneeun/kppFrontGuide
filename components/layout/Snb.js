import Link from 'next/link';

export function SnbForGuide() {
  return (
    <nav className='snb'>
      <section>
        <h2>KPP 가이드 라인</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/atom/button'>
              <a>화면 레이아웃 구조</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/button'>
              <a>CSS 작업 규칙</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/button'>
              <a>Redux 디자인 패턴</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/button'>
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
            <Link href='/sample/atom/button'>
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/badge'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/switch'>
              <a>Switch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/textInput'>
              <a>TextInput</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/valmsg'>
              <a>ValidationMsg</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/atom/selectbox'>
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
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/switch'>
              <a>Switch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/textInput'>
              <a>TextInput</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/valmsg'>
              <a>ValidationMsg</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/molecules/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
        </ol>
      </section>

      <section>
        <h2>ORGANISMS</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/organisms/button'>
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/badge'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/switch'>
              <a>Switch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/textInput'>
              <a>TextInput</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/valmsg'>
              <a>ValidationMsg</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
        </ol>
      </section>

      <section>
        <h2>TEMPLATE</h2>
        <ol className='flex-col-center'>
          <li>
            <Link href='/sample/organisms/button'>
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/badge'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/checkbox'>
              <a>CheckBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/switch'>
              <a>Switch</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/textInput'>
              <a>TextInput</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/valmsg'>
              <a>ValidationMsg</a>
            </Link>
          </li>
          <li>
            <Link href='/sample/organisms/selectbox'>
              <a>SelectBox</a>
            </Link>
          </li>
        </ol>
      </section>
    </nav>
  );
}
