import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';
import './style.css';
import styles from './styles.module.scss';

function SliderCommon({ data }) {
  const { slide } = styles;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <MdArrowBackIos />,
    nextArrow: <MdArrowForwardIos />,
  };

  return (
    <div className={slide}>
      <Slider {...settings}>
        {data
          .filter((_, i) => i !== 3) // 👈 loại bỏ ảnh có index = 2
          .map((src, index) => (
            <img src={src} key={index} alt='' />
          ))}
      </Slider>
    </div>
  );
}

export default SliderCommon;
