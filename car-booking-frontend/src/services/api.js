import axios from 'axios';

// Create an Axios instance with a base URL and default headers
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Base URL for your Laravel backend
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the authentication token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Export API methods for cars
export const getCars = () => api.get('/cars');
export const getCar = (id) => api.get(`/cars/${id}`);
export const createCar = (data) => api.post('/cars', data);
export const updateCar = (id, data) => api.put(`/cars/${id}`, data);
export const deleteCar = (id) => api.delete(`/cars/${id}`);

// Export API methods for bookings
export const getBookings = () => api.get('/bookings');
export const getBooking = (id) => api.get(`/bookings/${id}`);
export const createBooking = (data) => api.post('/bookings', data);
export const updateBooking = (id, data) => api.put(`/bookings/${id}`, data);
export const deleteBooking = (id) => api.delete(`/bookings/${id}`);

// Export API methods for authentication
export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const logout = () => api.post('/logout');

export default api;