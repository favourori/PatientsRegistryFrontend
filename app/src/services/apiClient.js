import axios from "axios";
import Nprogress from "nprogress";
import 'nprogress/nprogress.css'

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

apiClient.defaults.headers.common['Authorization'] = localStorage.getItem('token') || null

apiClient.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});
apiClient.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response;
  },
  function(error) {
    Nprogress.done();
    throw error;
  }
);
