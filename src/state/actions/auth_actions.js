import { AUTH_LOGIN, AUTH_LOGOUT } from './types';
import { Post, Get, CheckRespForErrors } from '../../utils/axiosUtils';
//import { InitUser } from './user_actions';

export const login = () => {
  return async (dispatch) => {
    try {
      const resp = await Post('/prueba/auth');
      const user = resp.data.data;

      console.log(resp)

      if (!user) {
        logout();
        return null;
      }
      //await dispatch(InitUser(user));
      return user;

    } catch (err) {
      console.log(
        err.message
      );
      return null;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await dispatch({
      type: AUTH_LOGOUT,
    });

    return null;
  };
};