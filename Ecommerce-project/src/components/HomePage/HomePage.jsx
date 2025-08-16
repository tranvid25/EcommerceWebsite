import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Layout from '@components/Layout/Layout';
import AdvanceHealing from '@components/Advance/AdvanceHealing';
import Info from '@components/Info/Info';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import { getProduct } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
function HomePage() {
  const { container } = styles;
  const [ListProducts,setListProducts]=useState([]);
  useEffect(()=>{
    getProduct().then((res)=>{
      setListProducts(res.contents);
    });
  },[]);
  return (
    <div>
      <div className={container}>
        <Header></Header>
        <Banner></Banner>
        <Info/>
        <AdvanceHealing/>
        <HeadingListProducts data={ListProducts.slice(0,2)}/>
        <PopularProduct data={ListProducts.slice(2,ListProducts.length)}/>
        <SaleHomePage/>
      </div>
    </div>
  );
}

export default HomePage;
