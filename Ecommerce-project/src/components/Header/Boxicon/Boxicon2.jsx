import React from 'react';
import styles from '../styles.module.scss';
import carticon from '@icon/carticon.min.svg';
import hearticon from '@icon/hearticon.min.svg';
import reloadicon from '@icon/reloadicon.min.svg';

function Boxicon2({ type, href, onClick }) {  // 👈 thêm onClick
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'cart':
        return carticon;
      case 'heart':
        return hearticon;
      case 'reload':
        return reloadicon;
      default:
        return null;
    }
  };

  return (
    <div className={boxIcon} onClick={onClick}>   {/* 👈 gắn onClick */}
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default Boxicon2;
