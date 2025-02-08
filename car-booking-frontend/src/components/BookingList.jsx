import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/bookings')
            .then(response => {
                console.log(response.data); // Inspect the data structure
                setBookings(response.data); // Update based on your API response
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Bookings</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>{/* Display booking details */}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
