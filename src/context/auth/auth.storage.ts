const ACCESS_TOKEN_KEY = 'accessToken';

export class AuthStorage {
  private accessToken: string | null;

  constructor() {
    try {
      this.accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    } catch {
      this.accessToken = null;
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
}

export const authStorage = new AuthStorage();
