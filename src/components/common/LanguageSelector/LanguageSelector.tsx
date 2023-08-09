import {
  selectAvailableLanguages,
  selectCurrentLanguage,
  setLanguage,
} from '@features/language';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {Dropdown, Space} from 'antd';
import React from 'react';
import styles from './LanguageSelector.module.less';

const LanguageSelector: React.FC = () => {
  const currentLanguage = useAppSelector(state => selectCurrentLanguage(state));
  const availableLanguages = useAppSelector(state =>
    selectAvailableLanguages(state)
  );
  const dispatch = useAppDispatch();

  const handleLanguageChange = (key: 'ru' | 'en' | 'ua') => {
    dispatch(setLanguage(key));
  };

  const items = availableLanguages.map(lang => ({
    label: (
      <span onClick={() => handleLanguageChange(lang.code)}>{lang.name}</span>
    ),
    key: lang.code,
  }));

  return (
    <Dropdown
      menu={{items}}
      trigger={['click']}
      className={styles.LanguageSelector}>
      <span onClick={e => e.preventDefault()}>
        <Space>
          {currentLanguage}
          <img src='/images/arrow.svg' alt='arrow' />
        </Space>
      </span>
    </Dropdown>
  );
};

export default LanguageSelector;
