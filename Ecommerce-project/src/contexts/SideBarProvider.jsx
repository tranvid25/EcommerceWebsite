import Cookies from 'js-cookie';
import { createContext, useState } from 'react';
import { getCart } from '@/apis/cartServie';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const userId = Cookies.get('userId');
  const [isOpen, setIsOpen] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const [type, setType] = useState('');
  const [detailProduct, setDetailProduct] = useState(null);
  const handleListProduct = (userId, type) => {
    if (!userId) {
      setListProduct([]);
      return;
    }
    if (type === 'cart') {
      getCart(userId)
        .then((res) => setListProduct(res.data.data))
        .catch(() => setListProduct([]));
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleListProduct,
    listProduct,
    setListProduct,
    userId,
    setDetailProduct,
    detailProduct, // thêm cho tiện reset cart
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
