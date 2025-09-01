import Cookies from 'js-cookie';
import { Children, createContext, useState } from 'react';
import { getCart } from '@/apis/cartServie';

export const SideBarContext = createContext();
export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listProduct,setListProduct]=useState([]);
  const [type,setType]=useState('');
 const handleListProduct=(userId,type)=>{
  if(userId && type==='cart')
  {
    getCart(userId)
    .then((res)=>{
      setListProduct(res.data.data)
    })
    .catch((err)=>{
      setListProduct([]);
    });
  }
 }
  
  const value={isOpen,setIsOpen,type,setType,handleListProduct,listProduct};
  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};
