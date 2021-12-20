import React, { Component, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function AdSlider(props) {
  const setActivePageNum = props.setActivePageNum && props.setActivePageNum;

  const settings = {
    className: 'thumbnail-slide',
    arrows: false,
    dots: false,
    dotsClass: 'slick-dots slick-thumb',
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility: false,
    afterChange: (e) => setActivePageNum(e + 1),
  };
  return <Slider {...settings}>{props.contents && props.contents}</Slider>;
}
