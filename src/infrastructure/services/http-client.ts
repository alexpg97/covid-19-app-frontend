import axios, { AxiosRequestConfig } from 'axios';

const httpClient = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

export default httpClient;
