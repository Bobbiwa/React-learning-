import axios from 'axios';
import { getToken } from '../utils/token';
import { message } from 'antd';

axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(
  (res) =>  res,
  (err) => {
    message.error(err.message, 1);
    return new Promise(() => {});
  }
);

export default axios
