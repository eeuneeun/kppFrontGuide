import React, { useState, useEffect, useRef } from 'react';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlant } from '../../../store/reducers/plantSlice';

export default function PlantList(props) {
  /* Props */
  const setIsShow = props.setIsShow;

  /* hook */
  const targetEl = useRef();

  /* Redux */
  const dispatch = useDispatch();
  const { allPlantList } = useSelector((state) => ({
    allPlantList: state.plantSlice.allPlantList,
  }));

  function selectPlant(e) {
    const targetPlantId = e.target.dataset.plantId;
    allPlantList.map((item, idx) => {
      if (item.id == targetPlantId) {
        dispatch(setSelectedPlant(item));
      }
    });
    setIsShow(false);
  }

  // 리스트 닫기
  useEffect(() => {
    // 영역외 클릭시
    function outRangeClickHandler(e) {
      if (targetEl.current && !targetEl.current.contains(e.target)) {
        setIsShow(false);
      }
    }

    // 바인딩
    document.addEventListener('mousedown', outRangeClickHandler);
    return () => {
      document.removeEventListener('mousedown', outRangeClickHandler);
    };
  }, [targetEl]);

  return (
    <ul className='plant-list-select' ref={targetEl}>
      {allPlantList &&
        allPlantList.map((item, idx) => (
          <li key={`plant${idx}`}>
            <button data-plant-id={item.id} onClick={selectPlant}>
              {item.name}
            </button>
          </li>
        ))}
    </ul>
  );
}
