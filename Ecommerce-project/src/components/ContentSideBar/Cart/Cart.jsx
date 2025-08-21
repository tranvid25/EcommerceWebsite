import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Cart() {
  const { container, boxContent,boxButton,sub,title,content } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<TfiShoppingCart />} title='CART' />
        <ItemProduct />
      </div>
      <div className={boxButton}>
        <div className={content}>
          <span className={sub}>Subtotal:</span>
          <span className={title}>$199.99</span>
        </div>
        <Button content={'VIEW CART'}/>
        <Button content={'CHECKOUT'} />
      </div>
    </div>
  );
}

export default Cart;
