import React from 'react';
import styles from './styles.module.scss';
function Button() {
  return (
    <div>
      <button className={styles.btn}>Click me</button>
      <button className={styles.btn2}>Click me2</button>
    </div>
  );
}

export default Button;
