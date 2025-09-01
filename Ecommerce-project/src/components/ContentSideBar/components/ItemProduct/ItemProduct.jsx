import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
import { deleteItem } from '@/apis/cartServie';
import { SideBarContext } from '@/contexts/SideBarProvider';
function ItemProduct({
  src,nameProduct,priceProduct,skuProduct,sizeProduct,quantity,productId,userId
}) {
  const { container, content, price, Close } = styles;
  const [isDelete,setIsDelete]=useState(false);
  const {handleListProduct}=useContext(SideBarContext);
  const handleRemoveItem=()=>{
    setIsDelete(true)
    deleteItem({productId,userId})
    .then((res)=>{
      console.log(res);
      setIsDelete(false);
      handleListProduct(userId,'cart');
    })
    .catch((err)=>{
      console.log(err);
      setIsDelete(false)
    });
  }
  return (
    <div className={container}>
      <img
        src={src}
        alt=''
      />
      <div className={Close} onClick={handleRemoveItem}>
        <IoMdClose />
      </div>
      <div className={content}>
        <div>{nameProduct}</div>
        <div>Size: {sizeProduct}</div>
        <div className={price}>{' '}{quantity}x${priceProduct}</div>
        <div>SKU:{skuProduct}</div>
      </div>
    </div>
  );
}

export default ItemProduct;
