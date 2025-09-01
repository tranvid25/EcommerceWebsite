import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get('userId') || null);

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
    setUserId(null);
    setUserInfo(null);
  };

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch(() => {
          setUserInfo(null);
          setUserId(null);
          Cookies.remove('userId');
        });
    }
  }, [userId]);

  return (
    <StoreContext.Provider
      value={{ userId, userInfo, handleLogout, setUserId, setUserInfo }}
    >
      {children}
    </StoreContext.Provider>
  );
};
