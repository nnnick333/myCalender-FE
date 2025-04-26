const JWT_TOKEN_NAME = 'jwt';
const REFRESH_TOKEN_NAME = 'refresh-token';

export function getJWT(): string | null {
  return localStorage.getItem(JWT_TOKEN_NAME);
}

export function setJWT(token: string) {
  localStorage.setItem(JWT_TOKEN_NAME, token);
}

export function clearJWT() {
  localStorage.removeItem(JWT_TOKEN_NAME);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_NAME);
}

export function setRefreshToken(token: string) {
  localStorage.setItem(REFRESH_TOKEN_NAME, token);
}

export function removeRefresh(token: string) {
  localStorage.removeItem(REFRESH_TOKEN_NAME);
}
