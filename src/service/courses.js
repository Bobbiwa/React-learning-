import request from '../config/axios';

export async function queryCourseAll() {
  const { REACT_APP_BASE_URL } = process.env;
  return request.get(`${REACT_APP_BASE_URL}/courses/all`);
}

export async function queryCourseById(id) {
  const { REACT_APP_BASE_URL } = process.env;
  return request.get(`${REACT_APP_BASE_URL}/courses/${id}`);
}

export function deleteCourseById(id) {
  const { REACT_APP_BASE_URL } = process.env;
  return request.delete(`${REACT_APP_BASE_URL}/courses/`, { params: { id } });
}
