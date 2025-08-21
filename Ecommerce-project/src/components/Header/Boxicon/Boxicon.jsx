import React from 'react'
import styles from '../styles.module.scss';
import fbicon from '@icon/fbicon.min.svg';
import insicon from '@icon/insicon.min.svg';
import ybicon from '@icon/ybicon.min.svg';
function Boxicon({type,href}) {
    const {boxIcon}=styles;
    const handleRenderIcon=(type)=>{
      switch (type){
        case 'fb':
          return fbicon;
        case 'ins':
          return insicon;
        case 'yt':
          return ybicon;  
      }
    }
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default Boxicon