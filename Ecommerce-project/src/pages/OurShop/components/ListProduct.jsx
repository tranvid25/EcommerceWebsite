import Layout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import styles from './styles.module.scss';
function ListProduct() {
  const { containerProduct } = styles;
  const { products,isShowGrid } = useContext(OurShopContext);
  return (
    <>
      <Layout>
        <div className={containerProduct}>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
              details={item}
              IsHomepage={false}
              isShowGrid={isShowGrid}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default ListProduct;
