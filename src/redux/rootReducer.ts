import {languageSlice} from '@features/language/languageSlice';
import {registrationSlice} from '@features/registration/registrationSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  registration: registrationSlice.reducer,
  language: languageSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
