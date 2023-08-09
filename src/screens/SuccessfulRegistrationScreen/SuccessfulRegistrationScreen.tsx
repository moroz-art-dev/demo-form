import {selectRegistrationTexts} from '@features/registration';
import {useAppSelector} from '@redux/hooks';
import {Successful} from '@sections/Successful';
import React from 'react';

const SuccessfulRegistrationScreen: React.FC = () => {
  const successfulTitle = useAppSelector(state =>
    selectRegistrationTexts(state, 'successfulTitle')
  );

  return <Successful text={successfulTitle} link='/user-profile' />;
};

export default SuccessfulRegistrationScreen;
