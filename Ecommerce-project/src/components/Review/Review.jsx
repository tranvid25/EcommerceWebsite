import React, { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import Rating from '@components/Start/Rating';
import Button from '@components/Button/Button';
function Review({ data, userId, listProductCart }) {
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
    color,
    rating,rate,review,
    username,email,checkbox,btnSubmit
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
        REVIEWS (0)
      </div>
      <div
        className={cls(contentMenu, {
          [isVisibility]: isSelected,
          [borderBottom]: isSelected,
        })}
      >
        REVIEWS
      </div>
      <p
        className={cls(contentMenu, {
          [isVisibility]: isSelected,
          
        })}
      >
        There are no reviews yet.
      </p>
      <div
        className={cls(contentMenu, {
          [isVisibility]: isSelected,
          [borderBottom]: isSelected,
        })}
      >
        Be the first to review “10K Yellow Gold”
      </div>
      <div
        className={cls(contentMenu, {
          [isVisibility]: isSelected,
          
        })}
      >
        Your email address will not be published. Required fields are marked
      </div>
      <div
        className={cls(contentMenu,rate, {
          [isVisibility]: isSelected,
          
        })}
      >
        <div>Your rating *</div>
        <div className={rating}>
          <Rating value={4}/>
        </div>
      </div>
      <div className={cls(contentMenu,review,{[isVisibility]:isSelected})}>
        <span>Your review *</span>
        <textarea name="review" id=""></textarea>
      </div>
      <div className={cls(contentMenu,username,{[isVisibility]:isSelected})}>
        <span>Name *</span>
        <input type="text" />
      </div>
      <div className={cls(contentMenu,email,{[isVisibility]:isSelected})}>
        <span>Email *</span>
        <input type="text" />
      </div>
      <div className={cls(contentMenu,checkbox,{[isVisibility]:isSelected})}>
        <input type="checkbox" />
        <span>Save my name, email, and website in this browser for the next time I comment.</span>
      </div>
       <div className={cls(contentMenu,btnSubmit,{[isVisibility]:isSelected})}>
        <Button content={'SUBMIT'}/>
      </div>
    </div>
  );
}

export default Review;
