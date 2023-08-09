import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import React from 'react';
import styles from './Button.module.less';

const SecondaryButton: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button size='large' className={styles.button} {...restProps}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
