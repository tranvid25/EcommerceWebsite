import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';
import ListProduct from '@/pages/OurShop/components/ListProduct';
function OurShop() {
  const { container, functionBox,btnMark } = styles;
  const navigate = useNavigate();
  const handleBackPreviousPage = () => {
    navigate(-1);
  }
  return (
    <OurShopProvider>
      <Header />
      <Layout>
        <div className={container}>
          <div className={functionBox}>
            <div>Home &gt; Our Shop</div>
            <div className={btnMark} onClick={() => handleBackPreviousPage()}>&lt; Return to previous page</div>
          </div>
          <Banner />
          <div>
            <Filter />
            <ListProduct />
          </div>
        </div>
      </Layout>
    </OurShopProvider>
  );
}

export default OurShop;
