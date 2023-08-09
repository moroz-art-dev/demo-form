import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import {rootReducer} from '@redux/rootReducer';
import rootSaga from '@redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware, thunk),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
