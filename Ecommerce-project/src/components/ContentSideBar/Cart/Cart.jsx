import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React, { useContext, useEffect } from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    container,
    boxContent,
    boxButton,
    sub,
    title,
    content,
    BtnCart,
    Nocart,
  } = styles;
  const navigate = useNavigate();
  const { listProduct, isOpen, type, handleListProduct, setIsOpen } =
    useContext(SideBarContext);
  const handleNavigateShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };
  const subtotal = listProduct.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  const userId = Cookies.get('userId');
  
  // 🔥 fetch cart mỗi khi mở cart
  useEffect(() => {
    if (isOpen && type === 'cart') {
      handleListProduct(userId, 'cart');
    }
  }, [isOpen, type, userId, handleListProduct]);
  const handleNavigateCart=()=>{
    navigate('/cart');
    setIsOpen(false);
  }
  return (
    <div className={container}>
      <HeaderSideBar icon={<TfiShoppingCart />} title='CART' />
      {listProduct.length ? (
        <div className={boxContent}>
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

          <div className={boxButton}>
            <div className={content}>
              <span className={sub}>Subtotal:</span>
              <span className={title}>${Math.ceil(subtotal)}</span>
            </div>
            <div className={BtnCart}>
              <Button content={'VIEW CART'} onClick={handleNavigateCart} />
              <Button content={'CHECKOUT'} />
            </div>
          </div>
        </div>
      ) : (
        <div className={Nocart}>
          <span>No products in the cart</span>
          <div>
            <Button content={'RETURN TO SHOP'} onClick={handleNavigateShop} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
