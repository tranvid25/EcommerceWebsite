import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/Layout/Layout';
import AdvanceHealing from '@components/Advance/AdvanceHealing';
import Info from '@components/Info/Info';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header></Header>
        <Banner></Banner>
        <Layout></Layout>
        <Info/>
        <AdvanceHealing/>
        <HeadingListProducts/>
      </div>
    </div>
  );
}

export default HomePage;
