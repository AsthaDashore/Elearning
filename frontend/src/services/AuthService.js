// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth'; // Replace with your backend URL

const login = (user) => {
    return axios
        .post(`${API_URL}/login`, user)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data)); // Save user data in localStorage
            }
            return response;
        });
};

const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
};
// Function to retrieve the current user from localStorage
const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Parse the user or return null if not found
};

export default {
    login,
    register,
    getCurrentUser,
};
