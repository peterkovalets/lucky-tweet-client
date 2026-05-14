import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    error.message =
      error.response?.data?.error ??
      error.response?.data?.message ??
      error.message;
    return Promise.reject(error);
  },
);

export default instance;
