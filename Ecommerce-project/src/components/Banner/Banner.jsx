import React from 'react'
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Banner() {
    const {container,content,title,des}=styles;
  return (
    <div className={container}>
        <div className={content}>
            <h1 className={title}>Tran vi Store</h1>
            <div className={des}>Make yours celebrations even more special this years with beautiful </div>
            <Button content={'Go to shop'}></Button>
        </div>
    </div>
  )
}

export default Banner