import React from 'react';
import  styles from './styles.module.scss';
function Layout({ children }) {
  const {wraplayout,container}=styles
  return (
    <div className={container}>
      {children}
    </div>
    
  );
}

export default Layout;
