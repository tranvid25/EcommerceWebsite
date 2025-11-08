import React, { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
function Index({ data, userId, listProductCart }) {
  console.log(data);
  const {
    container,
    title,
    isActive,
    contentMenu,
    borderBottom,
    isVisibility,
    size,
    sizeChildren,
    sizeContent,
    material,
    color
  } = styles;
  const [isSelected, setIsSelected] = useState(false);
  const handleToggle = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className={container}>
      <div
        className={cls(title, { [isActive]: isSelected })}
        onClick={handleToggle}
      >
        {isSelected ? (
          <RiArrowDownSLine style={{ fontSize: '20px' }} />
        ) : (
          <TfiLayoutLineSolid style={{ fontSize: '20px' }} />
        )}{' '}
        ADDITIONAL INFORMATION
      </div>
      <div
        className={cls(contentMenu, borderBottom, {
          [isVisibility]: isSelected,
        })}
      >
        <div className={size}>
          <div>Size</div>
          <div className={sizeContent}>
            {data.size.map((item, index) => (
              <div className={sizeChildren} key={index}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={cls(contentMenu, borderBottom, {
          [isVisibility]: isSelected,
        })}
      >
        <div className={material}>
          <div>Material</div>
          <div>{data.material}</div>
        </div>
      </div>
      <div
        className={cls(contentMenu, borderBottom, {
          [isVisibility]: isSelected,
        })}
      >
        <div className={color}>
          <div>Color</div>
          <div>Black,Blue</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
