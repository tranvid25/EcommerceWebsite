import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
function PopularProduct({data}) {
  const {container}=styles
  return (
    <>
      <Layout>
        <div className={container}>
          {data.map((item)=>(
            <ProductItem 
            key={item.id}
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}/>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default PopularProduct;
