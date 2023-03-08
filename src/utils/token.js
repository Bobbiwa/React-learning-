const TOKEN = 'access_token';
const NAME = 'name';
const AUTH = 'auth';
export function setToken(value) {
  window.localStorage.setItem(TOKEN, value);
}

export function setName(value) {
  window.localStorage.setItem(NAME, value);
}

export function setAuth(value) {
  window.localStorage.setItem(AUTH, value);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN);
}

export function getName() {
  return window.localStorage.getItem(NAME);
}

export function getAuth() {
  return window.localStorage.getItem(AUTH);
}

export function removeTokenNameAuth() {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem(NAME);
  window.localStorage.removeItem(AUTH);
}
