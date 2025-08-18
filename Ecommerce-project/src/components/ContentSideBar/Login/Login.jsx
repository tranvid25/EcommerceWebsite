import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { FaRegEyeSlash } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
function Login() {
  const {
    container,
    header,
    boxIcon,
    inputEmail,
    inputPassword,
    checkbox,
    buttonWrapper,
    footer,
  } = styles;
  const [showPassword, setShowPassword] = useState(false);

  const isShowTextPassword = showPassword ? 'text' : 'password';
  const handleShowTextPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={container}>
      <div className={header}>
        <RxAvatar className={boxIcon} />
        <span>Sign In</span>
      </div>
      <div className={inputEmail}>
        <label htmlFor=''>Username or email *</label>
        <input type='text' name='userName' />
      </div>
      <div className={inputPassword}>
        <label htmlFor=''>Password *</label>
       
        <div style={{ position: 'relative', width: '93%' }}>
          <input
            type={isShowTextPassword}
            name='password'
            style={{ width: '100%' }}
          />
          <div
            onClick={handleShowTextPassword}
            style={{
              position: 'absolute',
              right: '-5px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <LuEye /> : <FaRegEyeSlash />}
          </div>
        </div>
      </div>
      <div className={checkbox}>
        <input type='checkbox' />
        <span>Remember me</span>
      </div>
      <div className={buttonWrapper}>
        <Button content={'LOGIN'} />
      </div>
      <div className={footer}>
        <a href=''>Lost your password?</a>
      </div>
    </div>
  );
}

export default Login;
