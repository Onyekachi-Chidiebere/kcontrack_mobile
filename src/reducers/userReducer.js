import {LOGIN, LOGOUT} from '../constants/userConstant';

export function userReducer(state = {}, action) {
	switch (action.type) {
		case LOGIN:
			return action.payload;
		case LOGOUT:
			return null;
		default:
			return state;
	}
}
