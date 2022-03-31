import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
import store from '../state/store';
import { Post } from '../utils/axiosUtils';
import { AuthContext } from './AuthProvider';

const AuthRouteComponent = ({children, ...propierties}) => {

  //const {isSignedIn} =  store.getState().auth.isSignedIn
  //console.log('getting store',isSignedIn);
  //console.log('esta autenticado',isSignedIn)
  const user = Post('/users/check');

  return user ? <Outlet /> : <Navigate to="/" />
}

export {AuthRouteComponent};