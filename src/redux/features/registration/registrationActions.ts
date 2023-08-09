import {createAsyncThunk} from '@reduxjs/toolkit';
import {profileCreate, registrationUser} from '@services/apiProfile';
import {hashPassword} from '@utils/stringUtils';
import {CreateUserData, RegistrationUserData} from 'types';

export const registerProfileAsync = createAsyncThunk(
  'registration/registerUser',
  async (
    {userData, userToken}: {userData: CreateUserData; userToken: string},
    {rejectWithValue}
  ) => {
    try {
      const response = await profileCreate(userToken, userData);
      if (response.status === 200) {
        if (response.data.status === 'success') {
          return response.data.user_data;
        } else {
          throw new Error(response.data.msg);
        }
      } else {
        throw new Error('Server returned an error');
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  'registration/userCreate',
  async (userData: RegistrationUserData, thunkAPI) => {
    try {
      const hash = hashPassword(userData.password);
      const response = await registrationUser({
        email: userData.email,
        password: hash,
        ref: userData.ref,
      });
      if (response.status === 200) {
        if (response.data.status === 'success')
          return {
            token: response.data.user_data.token,
            email: userData.email,
            password: hash,
          };
        else {
          throw new Error(response.data.msg);
        }
      } else {
        throw new Error('Server returned an error');
      }
    } catch (error) {
      throw error;
    }
  }
);
