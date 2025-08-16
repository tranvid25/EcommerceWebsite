import React from 'react';
import LogoIcon from '@iconPng/marseille-logo.webp';
import styles from './styles.module.scss';
import LogoIcon1 from '@iconPng/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.webp';
function Footer() {
  const{container,content,boxImg}=styles;
  return (
    <div className={container}>
      <img src={LogoIcon} alt='' className={boxImg} />
      <div className={content}>
        <span>Home</span>
        <span>Elements</span>
        <span>Shop</span>
        <span>Blog</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Compare</span>
      </div>
      <div>Guaranteed safe ckeckout</div>
      <img src={LogoIcon1} alt='' className={boxImg} />
      <div>Trần vĩ Aka</div>
    </div>
  );
}

export default Footer;
