import {put, takeLatest} from 'redux-saga/effects';
import {registerProfileAsync, registerUserAsync} from './registrationActions';

function* handleRegisterUser(
  action: ReturnType<typeof registerUserAsync.pending>
) {
  try {
    yield console.log('saga registerUserAsync');
  } catch (error) {
    yield put(
      registerUserAsync.rejected(
        error,
        'Custom error message',
        action.payload,
        undefined,
        {rejectWithValue: true}
      )
    );
  }
}

function* handleRegisterProfile(
  action: ReturnType<typeof registerProfileAsync.pending>
) {
  try {
    yield console.log('saga registerProfileAsync');
  } catch (error) {
    yield put(
      registerProfileAsync.rejected(
        error,
        'Custom error message',
        action.payload,
        undefined,
        {rejectWithValue: true}
      )
    );
  }
}

export function* registrationSaga() {
  yield takeLatest(registerProfileAsync.pending.type, handleRegisterProfile);
  yield takeLatest(registerUserAsync.pending.type, handleRegisterUser);
}
