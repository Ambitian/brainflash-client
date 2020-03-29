const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export class AuthStorage {
  private accessToken: string | null;
  private refreshToken: string | null;

  constructor() {
    try {
      this.accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      this.refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    } catch {
      this.accessToken = null;
      this.refreshToken = null;
    }
  }

  public setAccessToken(accessToken: string | null) {
    this.accessToken = accessToken;

    try {
      if (accessToken) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      } else {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    } catch {}
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public setRefreshToken(refreshToken: string | null) {
    this.refreshToken = refreshToken;

    try {
      if (refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
      } else {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
      }
    } catch {}
  }

  public getRefreshToken() {
    return this.refreshToken;
  }
}

export const authStorage = new AuthStorage();
