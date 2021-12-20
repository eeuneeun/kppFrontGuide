import React, { useState } from 'react';

// @ 동그란 모양의 N 글씨가 있는 뱃지
export function NewLetterBadge(props) {
  return (
    <span className='flex-center new-badge'>
      <img src='/img/settings/new-icon.svg' alt='new' />
    </span>
  );
}

// @ 동그란 점 모양의 뱃지
export function NewDottedBadge(props) {
  return <span className='flex-center dotted-badge'></span>;
}

// @ 발전소 리스트의 구독 상태 라벨형 뱃지
export function SubStatusBadge(props) {
  const status = props.status ? props.status : 'received';
  return (
    <span className={`sub-label ${status}`}>
      {status == 'received'
        ? '접수완료'
        : status == 'inspect'
        ? '상세검토'
        : status == 'completed'
        ? '구독완료'
        : status == 'subscribe'
        ? '구독'
        : status == 'brokerage' && '전력중개사업'}
    </span>
  );
}
