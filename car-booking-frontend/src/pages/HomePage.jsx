import React from 'react';
import CarList from '../components/CarList';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Car Booking App</h1>
            <p>Find the perfect car for your next trip!</p>
            <h2>Featured Cars</h2>
            <CarList />
        </div>
    );
};

export default HomePage;