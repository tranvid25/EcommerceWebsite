import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { IoIosHeartEmpty } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import Index from '@components/MenuAccording';
import Review from '@components/Review/Review';

function Content2({ data, userId, listProductCart, setIsOpen, setType }) {
  const {
    content2,
    boxIcon,
    icon,
    containerMethods,
    titleMethods,
    boxImgMethods,
    imgMethods,
    methodBox,
    textSecure,
  } = styles;
  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
  ];
  return (
    <div className={content2}>
      <Button content={'BUY NOW'} />
      <div className={boxIcon}>
        <div className={icon}>
          <IoIosHeartEmpty />
        </div>
        <div className={icon}>
          <TfiReload />
        </div>
      </div>
      <div className={containerMethods}>
        <fieldset className={methodBox}>
          <div className={titleMethods}>
            Guaranteed <span>safe</span> checkout
          </div>
          <div className={boxImgMethods}>
            {srcMethods.map((src, index) => {
              return (
                <img src={src} alt={src} className={imgMethods} key={index} />
              );
            })}
          </div>
        </fieldset>
        <div className={textSecure}>Your Payment is 100% Secure</div>
      </div>
      <div>
        <div>
          <div>Brand: </div>
          <div>Brand 01</div>
        </div>
        <div>
          <div>SKU: </div>
          <div>12345</div>
        </div>
        <div>
          <div>Category: </div>
          <div>Men</div>
        </div>
      </div>
      <Index data={data} userId={userId} listProductCart={listProductCart} />
      <Review data={data} userId={userId} listProductCart={listProductCart} />
    </div>
  );
}

export default Content2;
