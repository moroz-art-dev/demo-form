import {UserData} from './apiTypes';

export interface RegistrationState {
  isLoading: boolean;
  error: string | null;
  userData: UserData;
  texts: {
    title: LanguageText;
    intro: LanguageText;
    successfulTitle: LanguageText;
    profileTitle: LanguageText;
    profileIntro: LanguageText;
    profileSuccessfulTitle: LanguageText;
    verificationText: LanguageText;
    goToCompanyProfileText: LanguageText;
  };
  lists: {
    advances: {
      ru: RegistrationList;
      en: RegistrationList;
      ua: RegistrationList;
    };
  };
  form: {
    titleRegistration: LanguageText;
    titleAuthorization: LanguageText;
    buttonRegistration: LanguageText;
    signInOption: LanguageText;
    buttonExit: LanguageText;
    buttonNext: LanguageText;
    titleProfile: LanguageText;
    confirmLogout: LanguageText;
    logoutConfirmationMessage: LanguageText;
    buttonConfirmExit: LanguageText;
    buttonContinueExit: LanguageText;
    titlePhoneVerification: LanguageText;
    descriptionPhoneVerification: LanguageText;
    passwordMismatchErrorMessage: LanguageText;
    inputRequiredErrorMessage: LanguageText;
    emailError: LanguageText;
    passwordMinLengthRule: LanguageText;
    passwordMaxLengthRule: LanguageText;
    passwordFormatRule: LanguageText;
    phoneConfirmation: {
      ru: Array<FormField>;
      en: Array<FormField>;
      ua: Array<FormField>;
    };
    registration: {
      ru: Array<FormField>;
      en: Array<FormField>;
      ua: Array<FormField>;
    };
    profile: {
      ru: Array<FormField>;
      en: Array<FormField>;
      ua: Array<FormField>;
    };
  };
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  list?: {label: string; code: string}[];
  placeholder: string;
  required: boolean;
  width?: string | number;
  dependencies?: string;
  value?: null | string | number;
}

export type LanguageText = {
  ru: string;
  en: string;
  ua: string;
};

export interface ItemWithTitle {
  title: string;
}

export interface RegistrationList extends Array<ItemWithTitle> {}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export interface FormProps {
  formFields: FormField[];
}

export interface YourValuesType {
  email: string;
  password: string;
  confirmPassword: string;
}
