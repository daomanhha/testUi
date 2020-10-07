/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import LoginForm from './components/LoginForm';
import styles from './index.less';

const LoginComponent = () => {
  return (
    <>
      <div className={cls(styles.LoginComponent_Wrapper, 'flex items-center justify-center')}>
        <div className={styles.LoginComponent_Content}>
          <div className={styles.LoginComponent_Quote}>
            <p className={styles.title}>Welcome back</p>
            <p className={styles.title}>
              to the <span className={styles.c_yellow}>*</span> Game
              <span className={styles.c_red}> her</span>'s
            </p>
            <p className={styles.title}>connect !</p>
          </div>
          <div className={cls(styles.LoginComponent_LoginForm, 'mt-12')}>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
