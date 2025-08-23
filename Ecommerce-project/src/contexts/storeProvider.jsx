import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get('userId') || null);
  const handleLogout=()=>{
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
    setUserInfo(null);
    window.location.reload();
  }
  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);


  return (
    <StoreContext.Provider value={{ userInfo,handleLogout,setUserId }}>
      {children}
    </StoreContext.Provider>
  );
};
