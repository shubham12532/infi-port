// apiService.js
import axios from 'axios';

const baseURL = 'https://52.23.247.20:8080/Infiport/v1/';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = (endpoint, params) => apiService.get(endpoint, { params });

export const post = (endpoint, data) => apiService.post(endpoint, data);
// Add more methods (put, delete, etc.) as needed
