import request from '../config/axios';
const { REACT_APP_BASE_URL } = process.env;
export async function queryCourseAll() {
  return request.get(`${REACT_APP_BASE_URL}/courses/all`);
}

export async function queryCourseById(id) {
  return request.get(`${REACT_APP_BASE_URL}/courses/${id}`);
}

export function deleteCourseById(id) {
  return request.delete(`${REACT_APP_BASE_URL}/courses/${id}`);
}

export function addCourse(data) {
  return request.post(`${REACT_APP_BASE_URL}/courses/add`, data);
}

export function updateCourse(id, data) {
  console.log(id, data);
  return request.put(`${REACT_APP_BASE_URL}/courses/${id}`, data);
}
