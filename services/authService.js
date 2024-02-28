import axios from "axios";

export function Login(values) {
  return axios.post(`/api/admin/employee/login`, values);
}

export function Logout() {
  return axios.get(`/api/admin/employee/logout`);
}

export function Signup(values) {
  return axios.post(`/api/admin/employee`, values);
}
