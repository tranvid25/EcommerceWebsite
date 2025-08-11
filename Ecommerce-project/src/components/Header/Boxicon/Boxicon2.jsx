import React from 'react'
import styles from '../styles.module.scss';
import carticon from '@icon/carticon.svg';
import hearticon from '@icon/hearticon.svg';
import reloadicon from '@icon/reloadicon.svg';
function Boxicon2({type,href}) {
    const {boxIcon}=styles;
    const handleRenderIcon=(type)=>{
        switch (type){
            case 'cart':
               return carticon;
            case 'heart':
                return hearticon;
            case 'reload':
                return reloadicon;
        }
    }
  return (
    <div className={boxIcon}>
        <img src={handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default Boxicon2