import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import React from 'react';
import styles from './Button.module.less';

const PrimaryButton: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button
      size='large'
      type='primary'
      className={styles.button}
      {...restProps}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
