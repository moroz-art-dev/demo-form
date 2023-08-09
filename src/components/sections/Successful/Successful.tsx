import {splitStringByNewline} from '@utils/stringUtils';
import {Layout, Typography} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Successful.module.less';
const {Title} = Typography;
const {Content} = Layout;

interface SuccessfulProps {
  link: string;
  text: string;
  children?: React.ReactNode;
}

const Successful: React.FC<SuccessfulProps> = ({text, children, link}) => {
  const lines = splitStringByNewline(text);

  return (
    <Layout>
      <Content className={styles.successfulContent}>
        <Link className='link' to={link}>
          <img src='/images/clear.svg' alt='clear' />
        </Link>
        <img width={72} src='/images/circle-check.svg' alt='ok' />
        <Title level={3} style={{textAlign: 'center'}}>
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Title>
        {children}
      </Content>
    </Layout>
  );
};

export default Successful;
