import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/Layout/Layout';
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header></Header>
        <Banner></Banner>
        <Layout></Layout>
        <Info/>
        
      </div>
    </div>
  );
}

export default HomePage;
