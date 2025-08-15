import Layout from '@components/Layout/Layout'
import React from 'react'
import styles from './styles.module.scss'
function AdvanceHealing() {
  const {container,headline,containerMiddleBox,des,title}=styles;
  return (
    <Layout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>
          <p className={des}>Don't miss supper offers</p>
          <p className={title}>Our best Product</p>
        </div>
        <div className={headline}></div>
      </div>
    </Layout>
  )
}

export default AdvanceHealing