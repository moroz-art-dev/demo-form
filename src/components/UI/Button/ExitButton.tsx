import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import React from 'react';
import styles from './Button.module.less';

const SystemButton: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button
      size='large'
      type='text'
      {...restProps}
      className={`${styles.button} ${styles.exitButton}`}>
      <img src='/images/login.svg' alt='exit' />
      {children}
    </Button>
  );
};

export default SystemButton;
