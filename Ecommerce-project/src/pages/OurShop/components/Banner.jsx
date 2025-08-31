import React, { useContext } from 'react'
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
function Banner() {
    const targetData = '2025-12-31T00:00:00';
    const{ sortOptions, showOptions } = useContext(OurShopContext);
    const { container,content } = styles;
  return (
    <div className={container}>
        <div>
            <CountdownTimer targetData={targetData} />
        </div>
        <div className={content}>
            <span>The Classices Make A ComeBack</span>
            <div style={{width:'150px'}}>
                <Button content={'Buy Now'}/>
            </div>
        </div>
    </div>
  )
}

export default Banner