import {RootState} from '@redux/store';

export const selectCurrentLanguage = (state: RootState) =>
  state.language.currentLanguage;

export const selectAvailableLanguages = (state: RootState) =>
  state.language.availableLanguages;
