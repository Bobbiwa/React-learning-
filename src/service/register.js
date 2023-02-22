import axios from 'axios'

export default function registerApi(data) {
  const { REACT_APP_BASE_URL } = process.env;
  return axios.post(`${REACT_APP_BASE_URL}/register`,data)
}