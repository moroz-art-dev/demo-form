import {Layout} from 'antd';
import React from 'react';
import styles from './Content.module.less';

const {Content: AntdContent} = Layout;

interface ContentProps {
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({children}) => {
  return <AntdContent className={styles.content}>{children}</AntdContent>;
};

export default Content;
