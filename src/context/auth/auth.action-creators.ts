import {
  AuthActionTypes,
  START_AUTHORIZING,
  SET_AUTHORIZED,
  SET_UNAUTHORIZED,
  SET_TOKENS,
  LOGOUT,
} from './auth.reducer';

export const startAuthorizing = (): AuthActionTypes => ({
  type: START_AUTHORIZING,
});

export const setAuthorized = (): AuthActionTypes => ({
  type: SET_AUTHORIZED,
});

export const setUnauthorized = (): AuthActionTypes => ({
  type: SET_UNAUTHORIZED,
});

export const setTokens = (
  accessToken: string,
  refreshToken: string,
): AuthActionTypes => ({
  type: SET_TOKENS,
  accessToken,
  refreshToken,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});
