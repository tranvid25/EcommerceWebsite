import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProducts({ data }) {
  const { container, containerItem, containerContent } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <Layout>
      <div className={container}>
        <div className={containerContent}>
          <CountdownBanner />
        </div>
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HeadingListProducts;
