import axios from "axios";

export const http = axios.create({baseURL: 'http://127.0.0.1:3333'});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);

    return Promise.reject(error);
  }
);
