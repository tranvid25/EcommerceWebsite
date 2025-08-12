import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss';
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  );
}

export default HomePage;
