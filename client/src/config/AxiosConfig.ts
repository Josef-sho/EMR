import axios from 'axios';
export type { AxiosRequestConfig as RequestConfig } from 'axios';

export const baseURL = 'https://currencytrading.azurewebsites.net';
export const mobileAppBaseUrl = 'api_url';

export const AxiosConfig = axios.create({
  baseURL
});

export const addTokenHeader = (token: string, type?: 'json' | 'formData') => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': type === 'formData' ? 'multipart/form-data' : 'application/json'
    }
  };
};
