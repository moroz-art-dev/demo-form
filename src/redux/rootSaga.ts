import {registrationSaga} from '@redux/features/registration/registrationSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([registrationSaga()]);
}
