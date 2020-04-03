/* eslint-disable @typescript-eslint/no-explicit-any */
import { authStorage } from '../context/auth/auth.storage';
import { REFRESH_TOKEN_MUTATION } from './mutations/refresh-token.mutation';

const isErrorResponse = (json: any): boolean => {
  return Boolean(json?.errors && json?.errors[0]);
};

const isNotAuthenticated = (json: any) => {
  return (
    isErrorResponse(json) &&
    json.errors[0].extensions.exception.name === 'UnauthorizedError'
  );
};

const prepareResponse = (text: string, json: any) => ({
  ok: true,
  json: () => Promise.resolve(json),
  text: () => Promise.resolve(text),
});

export const authFetch = async (
  uri: string,
  options: any,
): Promise<Response> => {
  const accessToken = authStorage.getAccessToken();

  if (accessToken) {
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(uri, options);

  const text = await response.text();
  const json = JSON.parse(text);

  if (!isNotAuthenticated(json)) {
    return prepareResponse(text, json) as Response;
  }

  const refreshResponse = await fetch(uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: { refreshToken: authStorage.getRefreshToken() || '' },
      query: REFRESH_TOKEN_MUTATION.loc?.source.body,
    }),
  });

  const refreshResponseJson = await refreshResponse.json();

  if (isErrorResponse(refreshResponseJson)) {
    authStorage.setAccessToken(null);
    return prepareResponse(text, json) as Response;
  }

  authStorage.setAccessToken(refreshResponseJson.data.refreshToken.accessToken);

  if (authStorage.getAccessToken()) {
    options.headers.authorization = `Bearer ${authStorage.getAccessToken()}`;
  }

  return fetch(uri, options);
};
