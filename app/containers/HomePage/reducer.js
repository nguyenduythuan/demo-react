/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import { FETCH_DATA, FETCH_DATA_SUCCESS } from './constants';

export const initialState = [];

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state];
    case FETCH_DATA_SUCCESS:
      state = action.users;
      return [...state];
    default:
      return [...state];
  }
};

export default homeReducer;
