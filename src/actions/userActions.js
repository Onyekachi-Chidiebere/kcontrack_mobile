import {LOGIN, LOGOUT, UPDATE_PROFILE} from '../constants/userConstant';

const login = user => async dispatch => {
  try {
    dispatch({type: LOGIN, payload: user});
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = user => async dispatch => {
  try {
    dispatch({type: UPDATE_PROFILE, payload: user});
  } catch (error) {
    console.log(error);
  }
};

const logout = () => async dispatch => {
  try {
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log(error);
  }
};

export {logout, login, updateProfile};