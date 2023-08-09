import {createSlice} from '@reduxjs/toolkit';
import registrationExtraReducers from './registrationExtraReducers';
import {initialState} from './registrationInitialState';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    clearState: state => {
      state.userData = initialState.userData;
    },
  },
  extraReducers: registrationExtraReducers,
});

export const {clearState} = registrationSlice.actions;
export default registrationSlice.reducer;
