import request from '../config/axios';


export async function queryAuthorsAll() {
  const { REACT_APP_BASE_URL } = process.env;
  return request.get(`${REACT_APP_BASE_URL}/authors/all`);
}