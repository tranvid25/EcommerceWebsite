import React, { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href, type }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate(); // ✅

  const handleClick = () => {
    if (type) {
      setType(type);
      setIsOpen(true);
    }
    if (content === 'Our Shop') {
      navigate('/shop'); // ✅ chuyển trang
    }
  };

  const handleRenderText = (content) => {
    if (content === 'Sign In' && userInfo) {
      return `Hello: ${userInfo.username}`;
    }
    return content;
  };

  const handleHover = () => {
    if (content === 'Sign In' && userInfo) {
      setIsShow(true);
    }
  };

  return (
    <div className={menu} onClick={handleClick} onMouseEnter={handleHover}>
      {handleRenderText(content)}
      {isShow && (
        <div
          onMouseLeave={() => setIsShow(false)}
          className={subMenu}
          onClick={handleLogout}
        >
          Logout
        </div>
      )}
    </div>
  );
}

export default Menu;
