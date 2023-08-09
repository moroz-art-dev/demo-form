import {LanguageState} from 'types';

export const initialState: LanguageState = {
  currentLanguage: 'ru',
  availableLanguages: [
    {code: 'ru', name: 'Русский'},
    {code: 'en', name: 'English'},
    {code: 'ua', name: 'Українська'},
  ],
};
