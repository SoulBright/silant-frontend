import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://soulbright.pythonanywhere.com/api/'
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;