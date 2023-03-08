import request from '../config/axios';

export function queryRole() {
  const { REACT_APP_BASE_URL } = process.env;
  return request.get(`${REACT_APP_BASE_URL}/users/me`);
}
