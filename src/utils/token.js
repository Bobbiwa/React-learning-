const TOKEN = 'access_token';
const NAME = 'name';

export function setToken(value) {
  window.localStorage.setItem(TOKEN, value);
}

export function setName(value) {
  window.localStorage.setItem(NAME, value);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN);
}

export function getName() {
  return window.localStorage.getItem(NAME);
}

export function removeTokenandName() {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem(NAME);
}
