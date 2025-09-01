import Layout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function ListProduct() {
  const { containerProduct, sectionListProduct, dotsLoader,BtnLoadMore } = styles;
  const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
    useContext(OurShopContext);
  return (
    <div className={sectionListProduct}>
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
      {products.length < total && (
        <div>
          {isLoadMore ? (
            <div className={dotsLoader}>
              <button className={BtnLoadMore}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          ) : (
            <div style={{ width: '200px', margin: '0 auto' }}>
              <Button content={'Load More Product'} onClick={handleLoadMore} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ListProduct;
