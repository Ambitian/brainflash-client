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
    const accessToken = authStorage.getAccessToken();
    const refreshToken = authStorage.getRefreshToken();
    dispatch(startAuthorizing());

    if (accessToken && refreshToken) {
      dispatch(setTokens(accessToken, refreshToken));
      dispatch(setAuthorized());
    } else {
      dispatch(setUnauthorized());
    }
  }, []);

  React.useEffect(() => {
    authStorage.setAccessToken(state.accessToken);
    authStorage.setRefreshToken(state.refreshToken);
  }, [state.accessToken, state.refreshToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
