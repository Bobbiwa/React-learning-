const TOKEN = 'access_token'

export function setToken(value) {
  window.localStorage.setItem(TOKEN,value)
}

export function getToken() {
  return window.localStorage.getItem(TOKEN)
}

export function removeTokenandName() {
  window.localStorage.removeItem(TOKEN)
  window.localStorage.removeItem("name")
}

