import {LOGIN, LOGOUT, UPDATE_PROFILE} from '../constants/userConstant';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case UPDATE_PROFILE:
      return {...state, ...action.payload};
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
