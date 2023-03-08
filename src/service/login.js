import request from '../config/axios';

export async function login(data) {
  const { REACT_APP_BASE_URL } = process.env;
  return request.post(`${REACT_APP_BASE_URL}/login`, data);
}

export async function logout() {
  const { REACT_APP_BASE_URL } = process.env;
  return request.delete(`${REACT_APP_BASE_URL}/logout`);
}
