import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React from 'react';
import { TfiHeart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Heart() {
  const { container, boxButton } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<TfiHeart />} title='HEART' />
        <ItemProduct />
      </div>
      <div className={boxButton}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD TO CART'} />
      </div>
    </div>
  );
}

export default Heart;
