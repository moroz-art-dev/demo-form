import {ExitButton, PrimaryButton, SecondaryButton} from '@UI/Button';
import {clearState} from '@features/registration';
import {useAppDispatch} from '@redux/hooks';
import {Modal, Typography} from 'antd';
import React, {useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ExitModal.module.less';

import {
  selectRegistrationForm,
  selectRegistrationFormObject,
} from '@features/registration';
import {useAppSelector} from '@redux/hooks';

const {Title} = Typography;

const ExitModal: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const variables = useAppSelector(
    useMemo(
      () =>
        selectRegistrationFormObject([
          'confirmLogout',
          'logoutConfirmationMessage',
          'buttonContinueExit',
          'buttonConfirmExit',
        ]),
      []
    )
  );

  const buttonExit = useAppSelector(state =>
    selectRegistrationForm(state, 'buttonExit')
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(clearState());
    setIsModalOpen(false);
    navigate('/');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ExitButton style={{float: 'left'}} onClick={showModal}>
        {buttonExit}
      </ExitButton>
      <Modal
        width={504}
        closeIcon={<img src='/images/close-modal.svg' alt='close' />}
        className={styles.exitModal}
        centered={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div key='continueButton' className={styles.exitModalFooter}>
            <PrimaryButton
              onClick={handleCancel}
              style={{width: 216, marginBottom: 12}}>
              {variables.buttonContinueExit}
            </PrimaryButton>
            <SecondaryButton
              onClick={handleOk}
              style={{width: 216, marginBottom: 12, marginLeft: 0}}>
              {variables.buttonConfirmExit}
            </SecondaryButton>
          </div>,
        ]}>
        <div className={styles.exitModalContent}>
          <img src='/images/close.svg' alt='close' />
          <Title level={3}>{variables.confirmLogout}</Title>
          <p>{variables.logoutConfirmationMessage}</p>
        </div>
      </Modal>
    </>
  );
};

export default ExitModal;
