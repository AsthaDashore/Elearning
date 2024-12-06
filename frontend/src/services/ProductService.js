// src/services/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/products'; // Replace with your backend URL

const getAllProducts = () => {
    return axios.get(API_URL); // Fetch all products
};

const getProductById = (id) => {
    return axios.get(`${API_URL}/${id}`); // Fetch a specific product by ID
};

export default {
    getAllProducts,
    getProductById,
};
