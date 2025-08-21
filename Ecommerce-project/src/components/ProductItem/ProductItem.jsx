import React from 'react';
import styles from './styles.module.scss';
import carticon from '@icon/carticon.svg';
import hearticon from '@icon/hearticon.svg';
import reloadicon from '@icon/reloadicon.svg';
import truckicon from '@icon/truckicon.svg';
function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImageHover,
    showFunctionHover,
    boxIcon,
    priced,
    title,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={boxImg}>
        <img src={src} alt='' />
        <img
         src={prevSrc} alt='' className={showImageHover}
        />
        <div className={showFunctionHover}>
          <div className={boxIcon}>
            <img src={carticon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={hearticon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reloadicon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={truckicon} alt='' />
          </div>
        </div>
        <div className={title}>{name}</div>
        <div className={priced}>{price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
