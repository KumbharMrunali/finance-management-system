import axios from "axios";

const BASE_URL = "https://finance-management-system-le1z.onrender.com/api/products";

export const getAllProducts = () => axios.get(BASE_URL);

export const addProduct = (product) =>
  axios.post(BASE_URL, product);

export const deleteProduct = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

export const getProductById = (id) =>
  axios.get(`${BASE_URL}/${id}`);

export const updateProduct = (id, product) =>
  axios.put(`${BASE_URL}/${id}`, product);

export const getByMonth = (month, year) =>
  axios.get(`${BASE_URL}/month?month=${month}&year=${year}`);

export const getByRange = (start, end) =>
  axios.get(`${BASE_URL}/range?start=${start}&end=${end}`);

export const getByCategory = (category) =>
  axios.get(`${BASE_URL}/category/${category}`);