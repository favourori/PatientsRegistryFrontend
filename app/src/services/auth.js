import { apiClient } from './apiClient';
const Auth = {
  // patient routes
  ProcessPatientRegister(payload) {
    return apiClient.post("/patients/signup", payload)
  },
  ProcessVerifyAccount(payload) {
    return apiClient.post("/patients/verify", payload);
  },
  ProcessPatientLogin(payload) {
    return apiClient.post("/patients/verify", payload);
  },

  // admin routes
  ProcessAdminLogin(payload) {
    return apiClient.post("/admins/login", payload);
  },
  ProcessAdminRegister(payload) {
    return apiClient.post("/admins/signup", payload);
  },
}

export default Auth