// Loading.jsx
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const { glitch } = styles;

  if (loading) {
    return (
      <div className="loader">
        <div data-glitch="Loading..." className={glitch}>
          Loading...
        </div>
      </div>
    );
  }

  return null; // sau 2s thì ẩn đi
}

export default Loading;
