import { AppAction } from '../../types';

export const SET_AUTHORIZED = 'auth/set-authorized';
export const SET_UNAUTHORIZED = 'auth/set-unauthorized';
export const SET_TOKENS = 'auth/set-tokens';
export const START_AUTHORIZING = 'auth/start-authorizing';
export const LOGOUT = 'auth/logout';

export type AuthActionTypes =
  | AppAction<typeof SET_AUTHORIZED>
  | AppAction<typeof SET_UNAUTHORIZED>
  | AppAction<typeof START_AUTHORIZING>
  | AppAction<typeof SET_TOKENS, { accessToken: string; refreshToken: string }>
  | AppAction<typeof LOGOUT>;

export interface AuthState {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case SET_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: true,
        isAuthorizing: false,
      };
    }

    case START_AUTHORIZING: {
      return {
        ...state,
        isAuthorizing: true,
      };
    }

    case SET_UNAUTHORIZED: {
      return {
        ...state,
        isAuthorized: false,
        isAuthorizing: false,
      };
    }

    case SET_TOKENS: {
      const { accessToken, refreshToken } = action;

      return {
        ...state,
        accessToken,
        refreshToken,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isAuthorized: false,
        isAuthorizing: false,
      };
    }

    default:
      return state;
  }
};
