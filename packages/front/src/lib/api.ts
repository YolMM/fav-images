import axios from 'axios';

const apiBaseURL = 'http://localhost:3001';

const api = axios.create({ baseURL: apiBaseURL });

export const getImages = async () => {
  const res = await api.get('/');
  return res.data;
};

export const addImages = async (data: object) => {
  const res = await api.post('/', data);
  return res.data;
};

export const deleteImages = async (id: string) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

export const updateImages = async (id: string, data: object) => {
  const res = await api.put(`/${id}`, data);
  return res.data;
};
