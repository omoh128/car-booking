import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CarList />} />
                <Route path="/car/:id" element={<CarDetail />} />
                <Route path="/book/:id" element={<BookingForm />} />
                <Route path="/bookings" element={<BookingList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;