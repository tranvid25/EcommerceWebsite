import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProducts() {
  const { container, containerItem,containerContent } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <Layout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </Layout>
  );
}

export default HeadingListProducts;
