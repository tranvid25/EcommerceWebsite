import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import carticon from '@icon/carticon.svg';
import hearticon from '@icon/hearticon.svg';
import reloadicon from '@icon/reloadicon.svg';
import truckicon from '@icon/truckicon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { toast } from 'react-toastify';
import { Addcart } from '@/apis/cartServie';
function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  IsHomepage = true,
}) {
  const context = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const isShowGrid = context?.isShowGrid ?? true; // default true
  const userId = Cookies.get('userId');
  const { setIsOpen, setType,handleListProduct } = useContext(SideBarContext);
  const {} = useContext(ToastContext);
  const {
    boxImg,
    showImageHover,
    showFunctionHover,
    boxIcon,
    priced,
    title,
    container,
    boxSize,
    size,
    textCenter,
    boxBtn,
    showFunctionHoverShop,
    containerList,
    infoBox,
    content,
    listImg,
    imageBox,
    isActiveSize,
    btnClear,
  } = styles;
  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };
  const handleClearSize = () => {
    setSizeChoose('');
  };
  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please Login to add product to cart');
      return;
    }
    if (!sizeChoose) {
      toast.warning('Please choose size');
      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose,
    };
    Addcart(data)
    .then((res)=>{
      setIsOpen(true);
      setType('cart');
      toast.success(res.data.msg);
      handleListProduct(userId,'cart');
    })
    .catch((err)=>{
      toast.error('Add product cart to fail')
    });
  };
  return (
    <div className={cls(container, { [containerList]: !isShowGrid })}>
      {isShowGrid ? (
        // ---- GRID VIEW ----
        <div className={boxImg}>
          <img src={src} alt='' />
          <img src={prevSrc} alt='' className={showImageHover} />

          {/* hover icons */}
          <div
            className={cls(showFunctionHover, {
              [showFunctionHoverShop]: !IsHomepage,
            })}
          >
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

          {/* info */}
          {!IsHomepage && (
            <div className={boxSize}>
              {details.size.map((item, index) => (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {sizeChoose && (
            <div className={btnClear} onClick={() => handleClearSize()}>
              Clear
            </div>
          )}
          <div
            className={cls(title, { [textCenter]: !IsHomepage && isShowGrid })}
          >
            {name}
          </div>
          {!IsHomepage && <div className={textCenter}>Brand 01</div>}
          <div
            className={cls(priced, { [textCenter]: !IsHomepage && isShowGrid })}
          >
            ${price}
          </div>
          {!IsHomepage && (
            <div className={boxBtn}>
              <Button content={'Add to Cart'} onClick={handleAddToCart} />
            </div>
          )}
        </div>
      ) : (
        // ---- LIST VIEW ----
        <div className={boxImg}>
          {/* ảnh bên trái */}
          <div className={content}>
            <div className={listImg}>
              <img src={src} alt='' className={imageBox} />
              <img src={prevSrc} alt='' className={showImageHover} />
            </div>

            {/* info bên phải */}
            <div className={infoBox}>
              {!IsHomepage && (
                <div className={boxSize}>
                  {details.size.map((item, index) => (
                    <div key={index} className={size}>
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

              <div className={title}>{name}</div>
              {!IsHomepage && <div>Brand 01</div>}
              <div className={priced}>${price}</div>
              {!IsHomepage && (
                <div className={boxBtn}>
                  <Button content={'Add to Cart'} onClick={handleAddToCart} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
