import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetData }) => {
  const { box, title } = styles;

  function calculateTimeLeft() {
    const difference = +new Date(targetData) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / 1000 / 60) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetData]);

  const formatNumber = (number) => String(number).padStart(2, '0');

  return (
    <div className={styles.timerWrapper}>
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className={box}>
          <div className={styles.number}>
            {formatNumber(timeLeft[interval])}
          </div>
          <div className={title}>{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
