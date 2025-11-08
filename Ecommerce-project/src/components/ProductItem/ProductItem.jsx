import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { toast } from 'react-toastify';
import { Addcart } from '@/apis/cartServie';
import { FiEye } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  IsHomepage = true,
  slideItem = false
}) {
  const context = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const isShowGrid = context?.isShowGrid ?? true;
  const isGrid = slideItem ? true : isShowGrid;

  const userId = Cookies.get('userId');
  const { setIsOpen, setType, handleListProduct, setDetailProduct } = useContext(SideBarContext);
  const {} = useContext(ToastContext);
  const navigate = useNavigate();

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

  const handleShowDetailProduct = (e) => {
    e.stopPropagation(); // tránh trigger click cha
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };

  const handeleNavigateDetailPage = () => {
    navigate(`/product/${details._id}`);
    setDetailProduct(details);
  };

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = (e) => {
    e.stopPropagation();
    setSizeChoose('');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
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
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        toast.success(res.data.msg);
        handleListProduct(userId, 'cart');
      })
      .catch(() => {
        toast.error('Add product to cart failed');
      });
  };

  return (
    <div
      className={cls(container, { [containerList]: !isGrid })}
      style={{ cursor: 'pointer' }}
      onClick={handeleNavigateDetailPage}
    >
      {isGrid ? (
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
              <BsCart3 />
            </div>
            <div className={boxIcon}>
              <FaRegHeart />
            </div>
            <div className={boxIcon}>
              <TfiReload />
            </div>
            <div className={boxIcon} onClick={handleShowDetailProduct}>
              <FiEye />
            </div>
          </div>

          {/* info */}
          {!IsHomepage && (
            <div className={boxSize} style={{ marginTop: slideItem ? '10px' : undefined }}>
              {details.size.map((item, index) => (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChooseSize(item.name);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {sizeChoose && (
            <div className={btnClear} onClick={handleClearSize}>
              Clear
            </div>
          )}
          <div className={cls(title, { [textCenter]: !IsHomepage && isGrid })}>
            {name}
          </div>
          {!IsHomepage && <div className={textCenter}>Brand 01</div>}
          <div className={cls(priced, { [textCenter]: !IsHomepage && isGrid })}>
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
          <div className={content}>
            <div className={listImg}>
              <img src={src} alt='' className={imageBox} />
              <img src={prevSrc} alt='' className={showImageHover} />
            </div>

            {/* info bên phải */}
            <div className={infoBox} style={{ marginTop: slideItem ? '10px' : undefined }}>
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
