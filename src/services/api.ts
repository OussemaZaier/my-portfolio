import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API endpoints
export const articlesAPI = {
  getAll: (params?: any) => api.get('/articles', { params }),
  getBySlug: (slug: string) => api.get(`/articles/${slug}`),
  getRelated: (slug: string) => api.get(`/articles/${slug}/related`),
  toggleLike: (slug: string) => api.post(`/articles/${slug}/like`),
  getStats: () => api.get('/articles/stats')
};

export const categoriesAPI = {
  getAll: (params?: any) => api.get('/categories', { params }),
  getBySlug: (slug: string) => api.get(`/categories/${slug}`)
};

export const contactAPI = {
  submit: (data: any) => api.post('/contact', data),
  getStats: () => api.get('/contact/stats')
};

export const healthAPI = {
  check: () => api.get('/health')
};

export default api;