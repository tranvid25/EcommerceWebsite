import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiClose } from 'react-icons/tfi';
import classNames from 'classnames';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import Cart from '@components/ContentSideBar/Cart/Cart';
import Heart from '@components/ContentSideBar/Heart/Heart';
function SideBar() {
  const { overlay, container, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen,type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        className={classNames({
          //classNames dùng dể thêm class
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {type === 'heart' && <div><Heart/></div>}
        {type === 'reload' && <div><Compare/></div>}
        {type === 'cart' && <div><Cart/></div>}
        {type === 'login' && <Login/>}
        {type === 'search' && <div>Đây là search</div>}
      </div>
    </div>
  );
}

export default SideBar;
