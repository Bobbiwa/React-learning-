import request from '../config/axios';

const { REACT_APP_BASE_URL } = process.env;
export async function queryAuthorsAll() {
  return request.get(`${REACT_APP_BASE_URL}/authors/all`);
}

export function addAuthor(data) {
  return request.post(`${REACT_APP_BASE_URL}/authors/add`, data);
}
