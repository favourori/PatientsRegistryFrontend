// import { apiClient } from './apiClient';

export default axios => ({
  // patient routes
  ProcessPatientRegister(payload) {
    return axios.post("/patients/signup", payload)
  },
  ProcessVerifyAccount(payload) {
    return axios.post("/patients/verify", payload);
  },
  ProcessPatientLogin(payload) {
    return axios.post("/patients/verify", payload);
  },

  // admin routes
  ProcessAdminLogin(payload) {
    return axios.post("/admins/login", payload);
  },
  ProcessAdminRegister(payload) {
    return axios.post("/admins/signup", payload);
  },
})