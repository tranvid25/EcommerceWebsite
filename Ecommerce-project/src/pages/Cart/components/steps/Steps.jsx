import React from 'react';
import styles from '../../styles.module.scss';
import Stepper from '@/pages/Cart/components/steps/Stepper';
function Steps() {
  const { containerSteps, steps, line,textNoti } = styles;
  const dataSteps = [
    {
      number: 1,
      content: 'Shopping Cart',
    },
    {
      number: 2,
      content: 'checkout',
    },
    {
      number: 3,
      content: 'order status',
    },
  ];
  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataSteps.map((item, index) => {
          return (
            <>
              <Stepper
                number={item.number}
                content={item.content}
                key={index}
                isDisabled={index!==0}
              />
              {index !== dataSteps.length - 1 && (<div className={line}></div>)}
            </>
          );
        })}
      </div>
      <div className={textNoti}>You are out of time!Checkout now to avoid losing your order !</div>
    </div>
  );
}

export default Steps;
