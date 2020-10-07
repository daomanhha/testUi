import React from 'react';
import { Row, Col } from 'antd';
import LoginImage from '@/static/web_images/LoginImage.png';
import LoginComponent from '@/components/LoginComponent';
import styles from './Welcome.less';

const Welcome = () => {
  return (
    <>
      <div className={styles.Login_Wrapper}>
        <Row>
          <Col xs={{ span: 0 }} lg={{ span: 14 }} xxl={{ span: 16 }}>
            <div>
              <img src={LoginImage} className={styles.customLoginImage} alt="" />
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 10 }} xxl={{ span: 8 }}>
            <LoginComponent />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Welcome;
