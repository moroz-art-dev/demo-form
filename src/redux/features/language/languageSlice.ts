import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './languageInitialState';
import {setLanguageReducer} from './languageReducers';

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: setLanguageReducer,
  },
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
