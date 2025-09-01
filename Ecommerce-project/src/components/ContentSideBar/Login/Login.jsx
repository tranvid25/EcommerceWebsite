import React, { useContext, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { FaRegEyeSlash } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn,getInfo} from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';

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
    errorText,
  } = styles;
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId, setUserInfo } = useContext(StoreContext);
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      if (isRegister) {
        setIsLoading(true);
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        setIsLoading(true);
        await signIn({ username, password })
          .then(async (res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;

            Cookies.set('token', token, { expires: 1 });
            Cookies.set('refreshToken', refreshToken, { expires: 7 });
            Cookies.set('userId', id);

            setUserId(id);

            // 🔥 Gọi lại API để lấy user info chính xác
            try {
              const userRes = await getInfo(id);
              setUserInfo(userRes.data.data);
            } catch (err) {
              console.log(err);
            }

            toast.success('Sign in successfully');
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error(err.response.data.message);
          });
      }
    },
  });
  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };
  return (
    <div className={container}>
      <div className={header}>
        <RxAvatar className={boxIcon} />
        <span>{isRegister ? 'Sign Up' : 'Sign In'}</span>
      </div>

      <form onSubmit={formik.handleSubmit}>
        {/* Email input */}
        <div className={inputEmail}>
          <label htmlFor='email'>Username or Email *</label>
          <input
            type='text'
            name='email'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={errorText}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password input */}
        <div className={inputPassword}>
          <label htmlFor='password'>Password *</label>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ width: '100%' }}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              {showPassword ? <LuEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className={errorText}>{formik.errors.password}</div>
          ) : null}
        </div>
        {isRegister && (
          <div className={inputPassword}>
            <label htmlFor='Confirm password'>Confirm Password *</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name='confirmPassword'
                id='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ width: '100%' }}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <LuEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className={errorText}>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        )}

        {/* Remember me */}
        {!isRegister && (
          <div className={checkbox}>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
        )}

        {/* Submit button */}
        <div className={buttonWrapper}>
          <Button
            type='submit'
            content={
              isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'
            }
          />
        </div>
      </form>
      <Button
        content={isRegister ? 'ALREADY HAVE AN ACCOUNT?' : 'CREATE AN ACCOUNT'}
        type='submit'
        onClick={handleToggle}
      />
      {/* Footer link */}
      <div className={footer}>
        <a href='#'>Lost your password?</a>
      </div>
    </div>
  );
}

export default Login;
