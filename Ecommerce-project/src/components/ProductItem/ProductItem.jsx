import React, { useContext } from 'react';
import styles from './styles.module.scss';
import carticon from '@icon/carticon.svg';
import hearticon from '@icon/hearticon.svg';
import reloadicon from '@icon/reloadicon.svg';
import truckicon from '@icon/truckicon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  IsHomepage = true,
}) {
  const context = useContext(OurShopContext);
  const isShowGrid = context?.isShowGrid ?? true; // default true
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
    listImg,imageBox
  } = styles;
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
                <div key={index} className={size}>
                  {item.name}
                </div>
              ))}
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
              <Button content={'Add to Cart'} />
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
                  <Button content={'Add to Cart'} />
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
