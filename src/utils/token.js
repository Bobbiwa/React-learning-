const TOKEN = 'access_token'

export function setToken(value) {
  window.localStorage.setItem(TOKEN,value)
}

export function getToken() {
  return window.localStorage.getItem(TOKEN)
}

export function removeToken() {
  window.localStorage.removeItem(TOKEN)
}

