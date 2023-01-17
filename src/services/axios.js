import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error.response);

    return Promise.reject(error);
  }
);
