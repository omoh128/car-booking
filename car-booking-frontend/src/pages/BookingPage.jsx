import React from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';
import Navbar from '../components/Navbar';

const BookingPage = () => {
    return (
        <div>
            <Navbar />
            <BookingForm />
            <BookingList />
        </div>
    );
};

export default BookingPage;