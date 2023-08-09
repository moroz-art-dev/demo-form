export interface LoginUserResponse {
  status: string;
  msg: string;
  user_data: {
    id: number;
    token: string;
    is_confirm_email: number;
    is_confirm_phone: number;
    is_profile_created: number;
    email: string;
    phone: string;
    password: string;
    lname: string;
    name: string;
    sname: string;
    birth_date: string;
  };
}

export interface ConfirmEmailResponse {
  status: string;
  msg: string;
}

export interface ConfirmPhoneResponse {
  status: string;
  msg: string;
}

export interface ForgotPasswordResponse {
  status: string;
  msg: string;
}

export interface ProfileCreateResponse {
  status: string;
  msg: string;
  user_data: {
    id: number;
    token: string;
    is_confirm_email: number;
    is_confirm_phone: number;
    is_profile_created: number;
    email: string;
    phone: string;
    password: string;
    lname: string;
    name: string;
    sname: string;
    birth_date: string;
    reset_password_token: string;
    confirm_phone_code: string;
    gender_id: number;
  };
}

export interface ResetPasswordResponse {
  status: string;
  msg: string;
}

export interface ConfirmPhoneSendSmsResponse {
  status: string;
  msg: string;
}

export interface ApiResponse<T> {
  status: string;
  msg: string;
  data: T;
}

export interface UserData {
  id: number | null;
  token: string | null;
  is_confirm_email: number | null;
  is_confirm_phone: number | null;
  is_profile_created: number | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  lname: string | null;
  name: string | null;
  sname: string | null;
  birth_date: string | null;
  reset_password_token?: string | null;
  confirm_phone_code?: string | null;
  gender_id?: number | null;
}

export interface CreateUserData {
  birth_date: string;
  lname: string;
  name: string;
  sname: string;
  phone: string;
  gender_id: number;
}

export interface RegistrationUserData {
  email: string;
  password: string;
  ref: string;
}

export interface RegistrationResponse {
  status: string;
  msg: string;
  user_data: {
    token: string;
  };
}

export type UserToken = string;
