import {Layout} from 'antd';
import React from 'react';
import styles from './Sidebar.module.less';

const {Sider} = Layout;

interface SidebarProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  width?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  backgroundImage,
  width,
}) => {
  const sidebarStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Sider width={width} className={styles.sidebar} style={sidebarStyle}>
      {children}
    </Sider>
  );
};

export default Sidebar;
