import React from 'react';
import {
  authReducer,
  AuthState,
  AuthActionTypes,
} from '../context/auth/auth.reducer';
import { authInitialState, AuthContext } from '../context/auth/auth.context';
import { authStorage } from '../context/auth/auth.storage';
import {
  setTokens,
  setAuthorized,
  startAuthorizing,
  setUnauthorized,
} from '../context/auth/auth.action-creators';

export const AuthStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<AuthState, AuthActionTypes>
  >(authReducer, authInitialState);

  React.useEffect(() => {
    const token = authStorage.getAccessToken();
    dispatch(startAuthorizing());

    if (token) {
      dispatch(setTokens(token, ''));
      dispatch(setAuthorized());
    } else {
      dispatch(setUnauthorized());
    }
  }, []);

  React.useEffect(() => {
    authStorage.setAccessToken(state.accessToken);
  }, [state.accessToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
