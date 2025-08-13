import { dataInfo } from '@components/Info/constant';
import InfoCart from '@components/Info/InfoCart';
import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
function Info() {
  const { container } = styles;
  return (
    <Layout>
      <div className={container}>
        {dataInfo.map((item) => {
          return (
            <InfoCart
              content={item.title}
              description={item.description}
              src={item.src}
            ></InfoCart>
          );
        })}
      </div>
    </Layout>
  );
}

export default Info;
