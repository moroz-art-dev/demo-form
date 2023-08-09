import {PayloadAction} from '@reduxjs/toolkit';
import {Language, LanguageState} from 'types';

export const setLanguageReducer = (
  state: LanguageState,
  action: PayloadAction<Language>
) => {
  state.currentLanguage = action.payload;
};
