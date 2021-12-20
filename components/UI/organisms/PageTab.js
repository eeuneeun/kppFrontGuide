import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import { setNowPageTabMenu } from '../../../store/reducers/pageSlice';

export default function PageTab(props) {
  const usePage = props.usePage ? props.usePage : 'monitoring';
  const router = useRouter();

  const dispatch = useDispatch();
  const { nowPageTabMenu } = useSelector((state) => ({
    nowPageTabMenu: state.pageSlice.nowPageTabMenu,
  }));

  function menuClickHandler(e) {
    const nowClick = e.currentTarget;
    const targetUrl = e.currentTarget.dataset.href;
    const menuName = nowClick.children[0].innerText;

    dispatch(setNowPageTabMenu(menuName));
    router.push(targetUrl);
  }

  return (
    <>
      <ul className='tab-menu'>
        <li
          className={nowPageTabMenu == '수익' ? 'active' : ''}
          onClick={menuClickHandler}
          data-href={`/${usePage}/profit`}
        >
          <h3>수익</h3>
        </li>
        <li
          className={nowPageTabMenu == '발전량' ? 'active' : ''}
          onClick={menuClickHandler}
          data-href={`/${usePage}/power`}
        >
          <h3>발전량</h3>
        </li>
        <li
          className={nowPageTabMenu == '장비' ? 'active' : ''}
          onClick={menuClickHandler}
          data-href={`/${usePage}/equipments`}
        >
          <h3>장비</h3>
        </li>
      </ul>
    </>
  );
}
