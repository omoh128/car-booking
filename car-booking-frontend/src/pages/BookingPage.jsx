import React from 'react';
import BookingList from '../components/BookingList';
import Navbar from '../components/Navbar';

const BookingPage = () => {
    return (
        <div>
            <Navbar />
            <h1>My Bookings</h1>
            <BookingList />
        </div>
    );
};

export default BookingPage;