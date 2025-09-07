import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import CartTable from '@/pages/Cart/components/contents/CartTable';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { Addcart, getCart, deleteCart } from '@/apis/cartServie';
import { toast } from 'react-toastify';
import { GrCart } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
function Contents() {
  const { containerContents, boxFooter, coupon, clearCart, btnok,boxEmptyCart,textEmpty } = styles;
  const { listProduct, handleListProduct, userId } = useContext(SideBarContext);
  const navigate = useNavigate();
  const handleReplace = (data) => {
    Addcart(data)
      .then((res) => {
        handleListProduct(data.userId, 'cart');
        toast.success('Thêm sản phẩm thành công');
      })
      .catch((err) => {
        toast.error('Sản phẩm đã hết');
      });
  };
  const handleDeleteCart = () => {
    deleteCart({ userId })
      .then((res) => {
        toast.success('Đã xóa tất cả sản phẩm');
        handleListProduct(userId, 'cart');
      })
      .catch((err) => {
        toast.error('Không có sản phẩm nào để xóa ');
      });
  };
  const handlenavigateshop=()=>{
    navigate('/shop');
  }
  return (
    <>
      {listProduct.length > 0 ? (
        <div className={containerContents}>
          <div>
            <CartTable
              listProduct={listProduct}
              getData={handleReplace}
              handleListProduct={handleListProduct}
            />
            <div className={boxFooter}>
              <div className={coupon}>
                <input type='text' placeholder='Coupon code' />
                <Button content={'OK'} />
              </div>
              <div className={clearCart}>
                <Button
                  content={<div>&#128465; CLEAR SHOPPING CART</div>}
                  onClick={handleDeleteCart}
                />
              </div>
            </div>
          </div>

          <CartSummary listProduct={listProduct} />
        </div>
      ) : (
        <div className={boxEmptyCart}>
          <div>
            <GrCart size={50} color='#777'/>
          </div>
          <span className={textEmpty}>your shopping cart is empty</span>
          <p>We invite you to get acquainted of our shop .Surely you can find something for youself</p>
          <Button content={'RETURN TO SHOP'} onClick={handlenavigateshop}/>
        </div>
      )}
    </>
  );
}

export default Contents;
