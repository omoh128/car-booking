import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        car_id: id,
        start_date: '',
        end_date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/bookings', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        
            .then(response => {
                alert('Booking successful!');
                navigate('/bookings');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="booking-container">
            <h1>Book Car</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={formData.start_date}
                        onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={formData.end_date}
                        onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
