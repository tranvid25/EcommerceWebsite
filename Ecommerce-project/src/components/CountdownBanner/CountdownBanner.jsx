import React from 'react';
import styles from './styles.module.scss';
import LogoBanner from '@iconPng/photo-of-man-wearing-white-hoodie-5474310.webp';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
function CountdownBanner() {
  const { container, containerContent, title, containertimer } = styles;
  const targetData = '2025-12-31T00:00:00';
  return (
    <div className={container}>
      <div className={containerContent}>
        <div className={containertimer}>
          <CountdownTimer targetData={targetData} />
        </div>
        <div className={title}>
          <div>
            <h2>The classics make a comeback</h2>
          </div>
          <div>
            <Button content={'Buy now'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownBanner;
