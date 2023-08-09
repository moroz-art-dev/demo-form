import {PrimaryButton, SecondaryButton} from '@UI/Button';
import {selectRegistrationTexts} from '@features/registration';
import {useAppSelector} from '@redux/hooks';
import {Successful} from '@sections/Successful';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const SuccessfulProfileScreen: React.FC = () => {
  const navigate = useNavigate();

  const profileSuccessfulTitle = useAppSelector(state =>
    selectRegistrationTexts(state, 'profileSuccessfulTitle')
  );
  const verificationText = useAppSelector(state =>
    selectRegistrationTexts(state, 'verificationText')
  );
  const goToCompanyProfileText = useAppSelector(state =>
    selectRegistrationTexts(state, 'goToCompanyProfileText')
  );

  const handleVerificationClick = () => {
    navigate('/phone-confirmation');
  };

  const handleGoToCompanyProfileClick = () => {
    navigate('/user-profile');
  };

  return (
    <Successful text={profileSuccessfulTitle} link='/user-profile'>
      <PrimaryButton onClick={handleVerificationClick}>
        {verificationText}
      </PrimaryButton>
      <SecondaryButton
        style={{marginBottom: 'auto'}}
        onClick={handleGoToCompanyProfileClick}>
        {goToCompanyProfileText}
      </SecondaryButton>
    </Successful>
  );
};

export default SuccessfulProfileScreen;
