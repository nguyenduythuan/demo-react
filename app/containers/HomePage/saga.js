/* eslint-disable prefer-destructuring */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_DATA, FETCH_DATA_SUCCESS } from './constants';
import callApi from '../../utils/apiCaller';
import { fetchDataSuccess } from './actions';

export function* getData() {
  const data = yield callApi('users', 'get', null).then(res => [...res.data]);
  yield put(fetchDataSuccess(data));
}

export default function* sagaWatcher() {
  yield takeLatest(FETCH_DATA, getData);
}
