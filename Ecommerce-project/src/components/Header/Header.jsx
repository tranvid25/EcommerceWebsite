import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Boxicon from './Boxicon/Boxicon';
import { dataBoxIcon, dataBoxIcon2, dataMenu } from './constants';
import Menu from './Menu/Menu';
import Boxicon2 from './Boxicon/Boxicon2';
import Logo from '@iconPng/name.png';
import { SideBarContext } from '@/contexts/SideBarProvider';
function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    logo,
    container,
    scrolled,
  } = styles;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { setIsOpen,setType } = useContext(SideBarContext);
  const handleOpenSideBar=(type)=>{
    setIsOpen(true);
    setType(type)
  }
  return (
    <div className={`${container} ${isScrolled ? scrolled : ''}`}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <Boxicon type={item.type} href={item.href}></Boxicon>;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                ></Menu>
              );
            })}
          </div>
        </div>
        <div>
          <img src={Logo} alt='' className={logo} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item) => {
              return <Menu content={item.content} href={item.href} type={item.type}></Menu>;
            })}
          </div>
          <div className={containerBoxIcon}>
            {dataBoxIcon2.map((item) => {
              return <Boxicon2 type={item.type} href={item.href} onClick={() => handleOpenSideBar(item.type)}></Boxicon2>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
