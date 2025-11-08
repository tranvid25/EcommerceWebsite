import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';
import './style.css';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
import { ImGift } from 'react-icons/im';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
  const { slide } = styles;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    prevArrow: <MdArrowBackIos />,
    nextArrow: <MdArrowForwardIos />,
  };

  return (
    <div className={slide}>
      <Slider {...settings}>
        {data.map((item, index) => {
          const src=!item.image ? item.images[0] : item.image;
          return (
            <>
              {isProductItem ? (
                <ProductItem
                  src={src}
                  prevSrc={src}
                  name={item.name}
                  price={item.price}
                  details={item}
                  IsHomepage={false}
                  slideItem
                />
              ) : (
                <img src={src} key={index} />
              )}
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderCommon;
