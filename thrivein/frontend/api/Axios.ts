import AxiosService, { AxiosInstance } from "axios";

export const PublicAxios: AxiosInstance = AxiosService.create();
PublicAxios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND;

PublicAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return { ...config, withCredentials: false };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

PublicAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error?.response?.data);
  }
);

export const AuthenticatedAxios: AxiosInstance = AxiosService.create();
AuthenticatedAxios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND;

AuthenticatedAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return { ...config, withCredentials: true };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

AuthenticatedAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error?.response?.data?.Message);
  }
);
