import {PrimaryButton} from '@UI/Button';
import {ExitModal} from '@common/ExitModal';
import {FormFields} from '@components/UI/FormFields';
import {
  registerProfileAsync,
  selectRegistrationForm,
  selectRegistrationFormObject,
  selectRegistrationUserData,
} from '@features/registration';
import {Content} from '@layout/Content';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {formatDate, objectToStringValues} from '@utils/stringUtils';
import {Form, Layout, Typography} from 'antd';
import {useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

import {selectRegistrationToken} from '@features/registration';
import React from 'react';
import {CreateUserData} from 'types';
import SectionSidebar from './sections/SectionProfileSidebar';
const {Title} = Typography;

const UserProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userToken = useAppSelector(state => selectRegistrationToken(state));
  const variables = useAppSelector(
    useMemo(
      () =>
        selectRegistrationFormObject([
          'titleProfile',
          'buttonExit',
          'buttonNext',
        ]),
      []
    )
  );

  const onFinish = (values: CreateUserData) => {
    const originalDate = new Date(values.birth_date);
    const date = formatDate(originalDate);
    dispatch(
      registerProfileAsync({
        userData: {...values, birth_date: date},
        userToken: userToken,
      })
    );
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  const formFields = useAppSelector(state =>
    selectRegistrationForm(state, 'profile')
  );

  const initialValues = useAppSelector(state =>
    selectRegistrationUserData(state)
  );

  useEffect(() => {
    initialValues.id && navigate('/successful-profile');
  }, [initialValues.id, navigate]);

  return (
    <Layout style={{height: '100%'}}>
      <SectionSidebar />
      <Layout>
        <Content>
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            name='basic'
            layout='vertical'
            initialValues={objectToStringValues({
              birth_date: initialValues.birth_date,
              name: initialValues.name,
              sname: initialValues.sname,
              phone: initialValues.phone,
              email: initialValues.email,
              lname: initialValues.lname,
              gender_id: initialValues.gender_id,
            })}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <div
              style={{
                maxWidth: 576,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexFlow: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'flex-start',
              }}>
              <Title level={3} style={{width: '100%'}}>
                {variables.titleProfile}
              </Title>
              <FormFields formFields={formFields} />
            </div>
            <Form.Item
              style={{
                width: '100%',
                marginTop: 'auto',
                marginBottom: '0px',
              }}>
              <ExitModal />
              <PrimaryButton style={{float: 'right'}} htmlType='submit'>
                {variables.buttonNext}
              </PrimaryButton>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserProfileScreen;
