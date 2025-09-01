import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React, { useContext, useEffect } from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';

function Cart() {
  const { container, boxContent, boxButton, sub, title, content, BtnCart } = styles;
  const { listProduct, isOpen, type, handleListProduct } = useContext(SideBarContext);
  const userId = Cookies.get('userId');

  // 🔥 fetch cart mỗi khi mở cart
  useEffect(() => {
    if (isOpen && type === "cart") {
      handleListProduct(userId, "cart");
    }
  }, [isOpen, type, userId, handleListProduct]);

  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<TfiShoppingCart />} title='CART' />
        {listProduct.map((item, index) => {
          return (
            <ItemProduct
              key={index}
              src={item.images[0]}
              nameProduct={item.name}
              priceProduct={item.price}
              skuProduct={item.sku}
              sizeProduct={item.size}
              quantity={item.quantity}
              productId={item.productId}
              userId={item.userId}
            />
          );
        })}
      </div>
      <div className={boxButton}>
        <div className={content}>
          <span className={sub}>Subtotal:</span>
          <span className={title}>$199.99</span>
        </div>
        <div className={BtnCart}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
