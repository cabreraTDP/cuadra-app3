import { AUTH_LOGIN, AUTH_LOGOUT } from './types';
import { Post, Get, CheckRespForErrors } from '../../utils/axiosUtils';
//import { InitUser } from './user_actions';

export const login = () => {
  return async (dispatch) => {
    try {
      console.log('auth...')
      const resp = await Post('/prueba/auth');
      const data = resp.data;

      console.log(data)
      return data;

    } catch (err) {
      console.log(
        err.message
      );
      return null;
    }
  };
};

export const prueba = () => {
  return async (dispatch) => {
    try {
      console.log('probando...')
      const resp = await Post('/prueba/');
      const data = resp.data;
      console.log(data)

      return data;

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