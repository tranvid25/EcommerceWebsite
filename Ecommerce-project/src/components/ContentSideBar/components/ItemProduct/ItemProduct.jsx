import React from 'react';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
function ItemProduct() {
  const { container, content, price, Close } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.2-min.jpg'
        alt=''
      />
      <div className={Close}>
        <IoMdClose />
      </div>
      <div className={content}>
        <div>title of product</div>
        <div className={price}>$1119.99</div>
      </div>
    </div>
  );
}

export default ItemProduct;
