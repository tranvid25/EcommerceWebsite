import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiClose } from 'react-icons/tfi';
import classNames from 'classnames';
function SideBar() {
  const { overlay, container, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        className={classNames({
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
        SideBar
      </div>
    </div>
  );
}

export default SideBar;
