import Link from 'next/link';

export default function Header() {
  return (
    <header className='header flex-center'>
      <h1>
        <Link href='#'>
          <a>KPP FRONTEND GUIDE</a>
        </Link>
      </h1>
      <ul className='flex-center'>
        <li>
          <Link href='/folder'>
            <a>기본 폴더 구조</a>
          </Link>
        </li>
        <li>
          <Link href='/guide'>
            <a>가이드 라인</a>
          </Link>
        </li>
        <li>
          <Link href='/sample'>
            <a> 샘플 예제 </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
