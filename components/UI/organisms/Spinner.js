import React, { useState } from 'react';

//@ 스피너
//  : 렌더링에 필요한 요소들이 로딩중일 때 표현
export default function Spinner(props) {
  
    return (
        <>
        <div className="loading-wrap part flex-center">
            <span id="loading"></span>
        </div>
        </>
    )
}