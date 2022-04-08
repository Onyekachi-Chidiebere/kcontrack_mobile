import {
  LOGIN,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_APPLIED_JOBS,
} from '../constants/userConstant';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {...action.payload, applied_jobs: []};
    case UPDATE_PROFILE:
      return {...state, ...action.payload};
    case UPDATE_APPLIED_JOBS:
      return {...state, applied_jobs: action.payload};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
