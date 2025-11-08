import React from 'react';
import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductItem from '@components/ProductItem/ProductItem';

function Related({ data }) {
  const {} = styles;

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 5,
        autoplay: true, // autoplay chỉ nhận true/false
        pauseOnHover: true, // dừng khi hover
        interval: 3000, // thời gian mỗi slide (ms)
      }}
    >
      {data.map((item, index) => (
        <SplideSlide key={index}>
          <ProductItem src={item.images[0]} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Related;
