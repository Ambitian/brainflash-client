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
  setUsername,
} from '../context/auth/auth.action-creators';
import jwt from 'jsonwebtoken';

export const AuthStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<AuthState, AuthActionTypes>
  >(authReducer, authInitialState);

  const setAuthData = (
    accessToken: string | null,
    refreshToken: string | null,
  ) => {
    if (!accessToken || !refreshToken) {
      return;
    }

    const payload = jwt.decode(accessToken) as { name: string };

    dispatch(setUsername(payload.name));
    dispatch(setTokens(accessToken, refreshToken));

    dispatch(setAuthorized());
  };

  React.useEffect(() => {
    const accessToken = authStorage.getAccessToken();
    const refreshToken = authStorage.getRefreshToken();
    dispatch(startAuthorizing());

    if (accessToken && refreshToken) {
      setAuthData(accessToken, refreshToken);
    } else {
      dispatch(setUnauthorized());
    }
  }, []);

  React.useEffect(() => {
    authStorage.setAccessToken(state.accessToken);
    authStorage.setRefreshToken(state.refreshToken);
    setAuthData(state.accessToken, state.refreshToken);
  }, [state.accessToken, state.refreshToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
