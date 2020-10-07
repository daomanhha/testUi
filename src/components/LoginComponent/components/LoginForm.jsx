/* eslint-disable */
import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import styles from '../index.less';

const LoginForm = () => {
  return (
    <>
      <div className={styles.LoginForm_Wrapper}>
        <Form name="basic">
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className={styles.customFormItem}
          >
            <Input
              prefix={
                <div>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 18.375V16.625C17.5 15.6967 17.1313 14.8065 16.4749 14.1501C15.8185 13.4937 14.9283 13.125 14 13.125H7C6.07174 13.125 5.1815 13.4937 4.52513 14.1501C3.86875 14.8065 3.5 15.6967 3.5 16.625V18.375"
                      stroke="#E1585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 9.625C12.433 9.625 14 8.058 14 6.125C14 4.192 12.433 2.625 10.5 2.625C8.567 2.625 7 4.192 7 6.125C7 8.058 8.567 9.625 10.5 9.625Z"
                      stroke="#E1585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              }
              placeholder="Username or Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className={styles.customFormItem}
          >
            <Input
              type="password"
              prefix={
                <div>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z"
                      stroke="#E1585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83325 9.16669V5.83335C5.83325 4.72829 6.27224 3.66848 7.05364 2.88708C7.83504 2.10567 8.89485 1.66669 9.99992 1.66669C11.105 1.66669 12.1648 2.10567 12.9462 2.88708C13.7276 3.66848 14.1666 4.72829 14.1666 5.83335V9.16669"
                      stroke="#E1585C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              }
              suffix={<span className={styles.customSuffixPassword}>Forgot password?</span>}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className={styles.customCheckBox}>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button className={styles.customButton_Login} type="primary" htmlType="submit">
              <span>Login</span>
            </Button>
          </Form.Item>
          <div className="mt-8">
            <Form.Item style={{ marginBottom: '10px' }}>
              <Button className={styles.customButton_LoginGoogle} type="primary">
                <div className={styles.customButton_Icn}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.625 12C5.625 10.8109 5.95261 9.69704 6.52177 8.74327V4.69759H2.47608C0.870375 6.78296 0 9.32448 0 12C0 14.6755 0.870375 17.2171 2.47608 19.3024H6.52177V15.2567C5.95261 14.303 5.625 13.1891 5.625 12Z"
                      fill="#FBBD00"
                    />
                    <path
                      d="M12 18.375L9.1875 21.1875L12 24C14.6756 24 17.217 23.1296 19.3024 21.5239V17.4825H15.261C14.2989 18.0538 13.1804 18.375 12 18.375Z"
                      fill="#0F9D58"
                    />
                    <path
                      d="M6.52176 15.2567L2.47607 19.3024C2.79398 19.7153 3.14015 20.1107 3.51473 20.4853C5.78123 22.7517 8.79469 24 12 24V18.375C9.67387 18.375 7.63514 17.1225 6.52176 15.2567Z"
                      fill="#31AA52"
                    />
                    <path
                      d="M24 12C24 11.2699 23.9339 10.5385 23.8035 9.82609L23.698 9.24957H12V14.8746H17.6931C17.1402 15.9743 16.2902 16.8715 15.261 17.4826L19.3024 21.524C19.7153 21.2061 20.1106 20.8599 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12Z"
                      fill="#3C79E6"
                    />
                    <path
                      d="M16.5078 7.49217L17.005 7.98933L20.9825 4.01189L20.4853 3.51473C18.2188 1.24823 15.2054 0 12 0L9.1875 2.8125L12 5.625C13.7028 5.625 15.3037 6.28809 16.5078 7.49217Z"
                      fill="#CF2D48"
                    />
                    <path
                      d="M12 5.625V0C8.79473 0 5.78128 1.24823 3.51473 3.51469C3.14015 3.88927 2.79398 4.28466 2.47607 4.69758L6.52176 8.74327C7.63519 6.8775 9.67392 5.625 12 5.625Z"
                      fill="#EB4132"
                    />
                  </svg>
                </div>
                <span>Continue with Google</span>
              </Button>
            </Form.Item>
            <Form.Item style={{ marginBottom: '10px' }}>
              <Button className={styles.customButton_LoginFacebook} type="primary">
                <div className={styles.customButton_Icn}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span>Continue with Facebook</span>
              </Button>
            </Form.Item>
            <Form.Item>
              <div className={styles.customButton_LoginQuote}>
                <p>
                  Don't have an account? <span>Sign Up</span>
                </p>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
