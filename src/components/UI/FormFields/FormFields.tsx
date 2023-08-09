import {
  selectRegistrationFormObject,
  selectRegistrationUserData,
} from '@features/registration';
import {useAppSelector} from '@redux/hooks';
import {DatePicker, Form, Input, Select} from 'antd';
import React, {useMemo} from 'react';
import {FormProps} from 'types';
import styles from './FormFields.module.less';

const FormFields: React.FC<FormProps> = ({formFields}) => {
  const userData = useAppSelector(state => selectRegistrationUserData(state));

  const variables = useAppSelector(
    useMemo(
      () =>
        selectRegistrationFormObject([
          'emailError',
          'inputRequiredErrorMessage',
          'passwordMismatchErrorMessage',
          'passwordMinLengthRule',
          'passwordMaxLengthRule',
          'passwordFormatRule',
        ]),
      []
    )
  );
  return (
    <>
      {formFields.map((field, index) => {
        let inputElement = null;

        switch (field.type) {
          case 'select':
            inputElement = (
              <Select
                disabled={userData[field.name]}
                size='large'
                placeholder={field.placeholder}
                suffixIcon={<img src='/images/arrow-drop.svg' alt='arrow' />}>
                {field.list.map((item, idx) => (
                  <Select.Option key={idx} value={item.code}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            );
            break;
          case 'date':
            inputElement = (
              <DatePicker
                disabled={userData[field.name]}
                format='DD/MM/YYYY'
                size='large'
                placeholder={field.placeholder}
                suffixIcon={false}
                style={{width: '100%'}}
              />
            );
            break;
          case 'password':
            inputElement = (
              <Input.Password
                disabled={userData[field.name]}
                size='large'
                placeholder={field.placeholder}
              />
            );
            break;
          default:
            inputElement = (
              <Input
                disabled={userData[field.name]}
                size='large'
                placeholder={field.placeholder}
              />
            );
            break;
        }

        const requiredRule = {
          required: field.required,
          message: `${
            variables.inputRequiredErrorMessage
          } ${field.label.toLowerCase()}!`,
        };

        const passwordMinLengthRule = {
          min: 8,
          message: variables.passwordMinLengthRule,
        };

        const passwordMaxLengthRule = {
          max: 14,
          message: variables.passwordMaxLengthRule,
        };

        const passwordFormatRule = {
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
          message: variables.passwordFormatRule,
        };

        let rules;
        if (field.name === 'password') {
          rules = [
            requiredRule,
            passwordMinLengthRule,
            passwordMaxLengthRule,
            passwordFormatRule,
          ];
        } else if (field.name === 'confirmPassword') {
          rules = [
            requiredRule,
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(variables.passwordMismatchErrorMessage)
                );
              },
            }),
          ];
        } else if (field.name === 'email') {
          rules = [
            requiredRule,
            {
              type: 'email',
              message: variables.emailError,
            },
          ];
        } else {
          rules = [requiredRule];
        }

        return (
          <Form.Item
            className={styles.formField}
            style={{width: field.width ?? '100%'}}
            key={field.label}
            label={field.label}
            name={field.name}
            dependencies={[field.dependencies]}
            rules={rules}>
            {inputElement}
          </Form.Item>
        );
      })}
    </>
  );
};

export default FormFields;
