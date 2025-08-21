import React, { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href,type }) {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleClick=()=>{
    if(type){
      setType(type);
      setIsOpen(true);
    }
  };

  return (
    <div className={menu} onClick={handleClick}>
      {content}
    </div>
  );
}

export default Menu;
