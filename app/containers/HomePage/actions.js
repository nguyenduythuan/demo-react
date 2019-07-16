import { FETCH_DATA, FETCH_DATA_SUCCESS } from './constants';

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchDataSuccess(users) {
  return {
    type: FETCH_DATA_SUCCESS,
    users,
  };
}
