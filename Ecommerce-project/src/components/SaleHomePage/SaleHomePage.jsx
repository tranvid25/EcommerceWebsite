import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import Layout from '@components/Layout/Layout';
function SaleHomePage() {
  const { container, content, title, des, boxImage,containerBig,image } = styles;
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);

  const [leftX, setLeftX] = useState(-80);   // ảnh trái ban đầu lệch -80px
  const [rightX, setRightX] = useState(80);  // ảnh phải ban đầu lệch +80px

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection('up');
    }
    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDirection === 'down' && scrollPosition >= 1500) {
      setLeftX(leftX >= 0 ? 0 : leftX + 1);
      setRightX(rightX <= 0 ? 0 : rightX - 1);
    } else if (scrollDirection === 'up') {
      setLeftX(leftX <= -80 ? -80 : leftX - 1);
      setRightX(rightX >= 80 ? 80 : rightX + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return (
    <div className={containerBig}>
      <div className={container}>
      {/* ảnh trái */}
      <div
        className={boxImage}
        style={{
          transform: `translateX(${leftX}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt=""
          className={image}
        />
      </div>

      <div className={content}>
        <h2 className={title}>Sale of the year</h2>
        <span className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </span>
        <Button content={'Read more'} />
      </div>

      {/* ảnh phải */}
      <div
        className={boxImage}
        style={{
          transform: `translateX(${rightX}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
          className={image}
        />
      </div>
    </div>
    </div>
  );
}


export default SaleHomePage;
