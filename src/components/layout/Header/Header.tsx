import {LanguageSelector} from '@common/LanguageSelector';
import {Col, Layout, Row} from 'antd';
import React from 'react';
import styles from './Header.module.less';

const {Header: AntdHeader} = Layout;

const Header: React.FC = () => {
  return (
    <AntdHeader className={`${styles.header}`}>
      <Row justify='end'>
        <Col>
          <LanguageSelector />
        </Col>
      </Row>
    </AntdHeader>
  );
};

export default Header;
