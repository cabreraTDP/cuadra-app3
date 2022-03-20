import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/types';

const initialState = {
  loading: true,
  token: null
};

    /* eslint-disable */
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: true,
        token: null
      };

    default:
      return state;
  }
};

    /* eslint-enable */