import {registerProfileAsync, registerUserAsync} from './registrationActions';

const registrationExtraReducers = builder => {
  builder.addCase(registerUserAsync.pending, state => {
    state.isLoading = true;
    state.error = null;
  });
  builder.addCase(registerUserAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.userData.token = action.payload.token;
    state.userData.email = action.payload.email;
    state.userData.password = action.payload.password;
  });
  builder.addCase(registerUserAsync.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
  builder.addCase(registerProfileAsync.pending, state => {
    state.isLoading = true;
    state.error = null;
  });
  builder.addCase(registerProfileAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.userData = action.payload;
  });
  builder.addCase(registerProfileAsync.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
};

export default registrationExtraReducers;
