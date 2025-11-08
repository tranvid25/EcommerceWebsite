import React, { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SlideCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import { toast } from 'react-toastify';
import { Addcart } from '@/apis/cartServie';
import { useNavigate } from 'react-router-dom';
import { TfiReload } from 'react-icons/tfi';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegHeart,
  FaSkype,
  FaVk,
  FaWhatsapp,
} from 'react-icons/fa';

import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
function DetailProduct() {
  const { detailProduct, setIsOpen, setType, userId, handleListProduct } =
    useContext(SideBarContext);
  const navigate = useNavigate();
  console.log(detailProduct);
  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const [sizeChoose, setSizeChoose] = useState('');
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setSizeChoose('');
    setQuantity(1);
  }, [detailProduct]);
  const {
    container,
    content,
    content1,
    or,
    content2,
    btnAdd,
    size,
    sizeBig,
    boxSize,
    btnClear,
    selectBox,
    lineleft,
    lineright,
    text,
    text1,
    category,
    sku,
    compare,
    wishlist,
    estimate,
    logo,
    logoitem,
    sizeActive
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
      toast.warning('!Please Login to add product to cart', {
        autoClose: 2000,
      });
      return;
    }
    if (!sizeChoose) {
      toast.warning('Please choose size');
    }
    const data = {
      userId,
      productId: detailProduct._id,
      quantity: quantity,
      size: sizeChoose,
    };
    Addcart(data)
      .then((res) => {
        toast.success('Thêm sản phẩm thành công');
        setIsOpen(false);
        navigate('/cart');
        handleListProduct(userId, 'cart');
      })
      .catch((err) => {
        toast.error('Lỗi thêm sản phẩm');
      });
  };

  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />
      <div className={content}>
        <div className={content1}>
          <h2>{detailProduct.name}</h2>
          <span>{detailProduct.price}</span>
          <span>{detailProduct.description}</span>
          <div className={sizeBig}>
            <div>Size {sizeChoose}</div>
            <div className={boxSize}>
              {detailProduct.size.map((item, index) => (
                <div
                  className={`${size} ${sizeChoose === item.name ? styles.sizeActive : ''}`}
                  key={index}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            {sizeChoose && (
              <div className={btnClear} onClick={() => handleClearSize()}>
                Clear
              </div>
            )}
          </div>
          <div className={btnAdd}>
            <div className={selectBox}>
              <SelectBox
                options={showOptions}
                defaultValue={quantity}
                getValue={(val) => setQuantity(Number(val))}
              />
            </div>
            <Button content={'ADD TO CART'} onClick={handleAddToCart} />
          </div>
        </div>
        <div className={or}>
          <div className={lineleft}></div>
          <div className={text}>OR</div>
          <div className={lineright}></div>
        </div>
        <div className={content2}>
          <Button content={'BUY NOW'} />
          <div className={compare}>
            <TfiReload />
            <span>Add to compare</span>
          </div>
          <div className={wishlist}>
            <FaRegHeart />
            <span>Add to wishlist</span>
          </div>
          <div className={sku}>
            <div className={text}>SKU:</div>
            <div className={text1}>16543</div>
          </div>
          <div className={category}>
            <div className={text}>Category:</div>
            <div className={text1}>Men</div>
          </div>
          <div className={estimate}>
            <div>Estimated delivery:</div>
            <div className={text1}>3 - 5 days</div>
          </div>
          <div className={logo}>
            <div>Share:</div>
            <div className={logoitem}>
              <a href='' data-title='Twitter'>
                <FaXTwitter />
              </a>
              <a href='' data-title='Facebook'>
                <FaFacebookF />
              </a>
              <a href='' data-title='VK'>
                <FaVk />
              </a>
              <a href='' data-title='Pinterest'>
                <FaPinterestP />
              </a>
              <a href='' data-title='Mail'>
                <IoIosMail />
              </a>
              <a href='' data-title='LinkedIn'>
                <FaLinkedinIn />
              </a>
              <a href='' data-title='Whatsapp'>
                <FaWhatsapp />
              </a>
              <a href='' data-title='Skype'>
                <FaSkype />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
//vì truyền vô giá trị detail là item lớn và là listProduct lun nên chỉ cần chấm trường muốn lấy ra
