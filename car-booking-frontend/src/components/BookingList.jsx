import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/bookings', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token for authenticated requests
            },
        })
            .then(response => setBookings(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>My Bookings!</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        <p>Car: {booking.car.name}</p>
                        <p>Start Date: {booking.start_date}</p>
                        <p>End Date: {booking.end_date}</p>
                        <p>Total Price: ${booking.total_price}</p>
                        <p>Status: {booking.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;