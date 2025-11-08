import React, { useState } from 'react';
import styles from './styles.module.scss';

import Button from '@components/Button/Button';
import { Addcart } from '@/apis/cartServie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Content1({ data, userId, listProductCart, setType, setIsOpen }) {
  const {
    content1,
    size,
    btnClear,
    boxSize,
    btnAdd,
    title,
    price,
    description,
    btnQuantity,
    sl,
    cong,
    tru,
    inputSL,
    sizeActive
  } = styles;

  const [sizeChoose, setSizeChoose] = useState('');
  const [amountChoose, setAmountChoose] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isExsting, setIsExsting] = useState(false);

  const handleChooseSize = (size, amount) => {
    setSizeChoose(size);
    setAmountChoose(amount);
  };

  const clearChooseSize = () => {
    setSizeChoose('');
    setAmountChoose('');
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // không cho nhỏ hơn 1
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // chỉ cho số
      setQuantity(value === '' ? '' : parseInt(value, 10));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  const handleInputBlur = () => {
    if (quantity === '' || quantity < 1) {
      setQuantity(1); // reset về 1 nếu bỏ trống hoặc số < 1
    }
    setIsExsting(false);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('!Please Login to add product to cart', {
        autoClose: 2000,
      });
      return;
    }

    if (!sizeChoose) {
      toast.warning('Please choose size');
      return; // ⚠️ bắt buộc return
    }

    const payload = {
      userId,
      productId: data._id,
      quantity: quantity,
      size: sizeChoose,
    };
    Addcart(payload)
      .then((res) => {
        toast.success('Thêm sản phẩm thành công');
        setIsOpen(false);
        navigate('/cart');
        listProductCart(userId, 'cart');
      })
      .catch((err) => {
        toast.error('Thêm sản phẩm thất bại');
      });
  };

  return (
    <div className={content1}>
      <span className={title}>{data.name}</span>
      <p className={price}>${data.price}</p>
      <p className={description}>{data.description}</p>

      <div>Size {sizeChoose}</div>
      <div className={boxSize}>
        {data.size.map((item, index) => (
          <div
            className={`${size} ${sizeChoose === item.name ? sizeActive : ''}`}
            key={index}
            onClick={() => handleChooseSize(item.name, item.amount)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {sizeChoose && (
        <div className={btnClear} onClick={clearChooseSize}>
          <div>{amountChoose}</div>
          Clear
        </div>
      )}

      <div className={btnAdd}>
        <div className={btnQuantity}>
          <div className={cong} onClick={handleAdd}>
            +
          </div>

          <div className={sl}>
            {isExsting ? (
              <input
                type="text"
                className={inputSL}
                value={quantity}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <span onClick={() => setIsExsting(true)}>{quantity}</span>
            )}
          </div>

          <div className={tru} onClick={handleSubtract}>
            -
          </div>
        </div>

        <Button content={'ADD TO CART'} onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default Content1;
