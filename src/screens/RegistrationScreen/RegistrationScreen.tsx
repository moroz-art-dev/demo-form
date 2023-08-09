import {PrimaryButton} from '@UI/Button';
import {FormFields} from '@components/UI/FormFields';
import {
  registerUserAsync,
  selectRegistrationForm,
  selectRegistrationFormObject,
  selectRegistrationUserData,
} from '@features/registration';
import {Content} from '@layout/Content';
import {Header} from '@layout/Header';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {Divider, Form, Layout, Tabs} from 'antd';
import {useNavigate} from 'react-router-dom';
import {RegistrationUserData, YourValuesType} from 'types';

import SocialButton from '@components/UI/Button/SocialButton';
import React, {useEffect, useMemo} from 'react';
import SectionSidebar from './sections/SectionRegistrationSidebar';

const RegistrationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: YourValuesType) => {
    const UserData: RegistrationUserData = {
      email: values.email,
      password: values.password,
      ref: '/',
    };

    dispatch(registerUserAsync(UserData));

    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  const variables = useAppSelector(
    selectRegistrationFormObject([
      'titleAuthorization',
      'titleRegistration',
      'buttonRegistration',
      'signInOption',
    ])
  );

  const formFields = useAppSelector(state =>
    selectRegistrationForm(state, 'registration')
  );

  const initialValues = useAppSelector(state =>
    selectRegistrationUserData(state)
  );

  const memoizedVariables = useMemo(() => variables, [variables]);
  const memoizedFormFields = useMemo(() => formFields, [formFields]);
  const memoizedInitialValues = useMemo(() => initialValues, [initialValues]);

  useEffect(() => {
    initialValues.token && navigate('/successful-registration');
  }, [initialValues.token, navigate]);

  return (
    <Layout style={{height: '100%'}}>
      <SectionSidebar />
      <Layout>
        <Header />
        <Content>
          <Tabs
            style={{maxWidth: 336, margin: 'auto'}}
            defaultActiveKey='2'
            centered
            items={[
              {
                label: `${memoizedVariables.titleAuthorization}`,
                key: '1',
                children: 'Tab 1',
              },

              {
                label: `${memoizedVariables.titleRegistration}`,
                key: '2',
                children: (
                  <Form
                    style={{maxWidth: 336, margin: 'auto'}}
                    name='basic'
                    layout='vertical'
                    initialValues={memoizedInitialValues}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'>
                    <FormFields formFields={memoizedFormFields} />
                    <Form.Item style={{width: '100%'}}>
                      <PrimaryButton htmlType='submit' block>
                        {memoizedVariables.buttonRegistration}
                      </PrimaryButton>
                    </Form.Item>
                    <Divider style={{fontSize: '12px'}}>
                      {memoizedVariables.signInOption}
                    </Divider>
                    <Form.Item style={{width: '100%'}}>
                      <div
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex',
                        }}>
                        <SocialButton>
                          <img src='/images/google.svg' alt='google' />
                        </SocialButton>
                        <SocialButton>
                          <img src='/images/facebook.svg' alt='facebook' />
                        </SocialButton>
                        <SocialButton>
                          <img src='/images/linkedin.svg' alt='linkedin' />
                        </SocialButton>
                      </div>
                    </Form.Item>
                  </Form>
                ),
              },
            ]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RegistrationScreen;
