import React from 'react';
import { AuthState, AuthActionTypes } from './auth.reducer';

export type AuthStateApi = {
  state: AuthState;
  dispatch: React.Dispatch<AuthActionTypes>;
};

export const authInitialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthorized: true,
  isAuthorizing: false,
};

export const AuthContext = React.createContext<AuthState | AuthStateApi>(
  authInitialState,
);
