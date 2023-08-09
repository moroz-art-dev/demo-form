import axios, {AxiosResponse, Method} from 'axios';
import {
  API_BASE_URL,
  API_CONFIRM_EMAIL,
  API_CONFIRM_PHONE,
  API_CONFIRM_PHONE_SEND_SMS,
  API_FORGOT_PASSWORD,
  API_LOGIN_USER,
  API_PROFILE_CREATE,
  API_REGISTRATION,
  API_RESET_PASSWORD,
} from 'utils/constants';

import {
  ConfirmEmailResponse,
  ConfirmPhoneResponse,
  ConfirmPhoneSendSmsResponse,
  CreateUserData,
  ForgotPasswordResponse,
  LoginUserResponse,
  ProfileCreateResponse,
  RegistrationResponse,
  RegistrationUserData,
  ResetPasswordResponse,
  UserToken,
} from 'types/';

export const convertToRecord = <T>(data: T): Record<string, unknown> => {
  return data as Record<string, unknown>;
};

export const makeApiRequest = async <T>(
  method: Method,
  url: string,
  data?: Record<string, unknown>,
  headers?: Record<string, string>
): Promise<AxiosResponse<T>> => {
  const response = await axios({
    method,
    url: `${API_BASE_URL}${url}`,
    data,
    headers,
  });
  return response;
};

export const registrationUser = async ({
  email,
  password,
  ref,
}: RegistrationUserData): Promise<AxiosResponse<RegistrationResponse>> => {
  return makeApiRequest<RegistrationResponse>('post', API_REGISTRATION, {
    email,
    password,
    ref,
  });
};

export const loginUser = (
  username: string,
  password: string
): Promise<AxiosResponse<LoginUserResponse>> =>
  makeApiRequest<LoginUserResponse>('post', API_LOGIN_USER, {
    username,
    password,
  });

export const confirmEmail = (
  token: string,
  ref: string
): Promise<AxiosResponse<ConfirmEmailResponse>> =>
  makeApiRequest<ConfirmEmailResponse>('get', API_CONFIRM_EMAIL, undefined, {
    token,
    ref,
  });

export const confirmPhone = (
  userToken: UserToken,
  confirmPhoneCode: number
): Promise<AxiosResponse<ConfirmPhoneResponse>> =>
  makeApiRequest<ConfirmPhoneResponse>(
    'post',
    API_CONFIRM_PHONE,
    {confirmPhoneCode},
    {userToken}
  );

export const forgotPassword = (
  email: string,
  ref: string
): Promise<AxiosResponse<ForgotPasswordResponse>> =>
  makeApiRequest<ForgotPasswordResponse>('post', API_FORGOT_PASSWORD, {
    email,
    ref,
  });

export const profileCreate = (
  userToken: UserToken,
  userData: CreateUserData
): Promise<AxiosResponse<ProfileCreateResponse>> =>
  makeApiRequest<ProfileCreateResponse>(
    'post',
    API_PROFILE_CREATE,
    convertToRecord(userData),
    {
      userToken,
    }
  );

export const resetPassword = (
  newPassword: string,
  resetPasswordToken: string
): Promise<AxiosResponse<ResetPasswordResponse>> =>
  makeApiRequest<ResetPasswordResponse>('post', API_RESET_PASSWORD, {
    newPassword,
    resetPasswordToken,
  });

export const confirmPhoneSendSms = (
  userToken: string,
  phone: string
): Promise<AxiosResponse<ConfirmPhoneSendSmsResponse>> =>
  makeApiRequest<ConfirmPhoneSendSmsResponse>(
    'post',
    API_CONFIRM_PHONE_SEND_SMS,
    {phone},
    {userToken}
  );
