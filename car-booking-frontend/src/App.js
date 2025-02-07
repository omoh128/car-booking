import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarPage from './pages/CarPage';
import CarList from './components/CarList';
import BookingPage from './pages/BookingPage';
import BookingForm from './components/BookingForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarList />} /> 
                <Route path="/car/:id" element={<CarPage />} />
                <Route path="/book/:id" element={<BookingForm />} />
                <Route path="/bookings" element={<BookingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;