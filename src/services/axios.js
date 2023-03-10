import axios from "axios";

axios.defaults.withCredentials = true;
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);

    return Promise.reject(error);
  }
);
