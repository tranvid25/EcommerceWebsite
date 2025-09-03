import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';
import Contents from '@/pages/Cart/components/contents/Contents';
import Steps from '@/pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';
import Layout from '@components/Layout/Layout';
function Cart() {
  const { container } = styles;
  return (
    <>
      <Header></Header>
      <div className={container}>
        <Steps />
        <Layout>
          <Contents />
        </Layout>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;
