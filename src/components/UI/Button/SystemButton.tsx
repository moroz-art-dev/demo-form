import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import React from 'react';
import styles from './Button.module.less';

const SystemButton: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button size='large' className={styles.button} type='dashed' {...restProps}>
      {children}
    </Button>
  );
};

export default SystemButton;
