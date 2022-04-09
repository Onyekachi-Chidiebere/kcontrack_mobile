import {
  LOGIN,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_APPLIED_JOBS,
  UPDATE_PAYMENT_INFO,
} from '../constants/userConstant';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {...action.payload, applied_jobs: []};
    case UPDATE_PROFILE:
      return {...state, ...action.payload};
    case UPDATE_PAYMENT_INFO:
      return {...state, wallet: {...state.wallet, ...action.payload}};
    case UPDATE_APPLIED_JOBS:
      return {...state, applied_jobs: action.payload};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
