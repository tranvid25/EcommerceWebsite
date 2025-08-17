import React, { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
  const { menu } = styles;
  const {setIsOpen}=useContext(SideBarContext);
  return (
    <div className={menu} onClick={() => setIsOpen(true)}>
      {content}
    </div>
  );
}

export default Menu;
