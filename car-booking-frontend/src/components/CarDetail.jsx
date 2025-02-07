import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cars/${id}`)
            .then(response => setCar(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div>
            <h1>{car.name} - {car.model}</h1>
            <p>Price per day: ${car.price_per_day}</p>
            <p>Availability: {car.is_available ? 'Available' : 'Not Available'}</p>
            <Link to={`/book/${car.id}`} className="btn btn-primary">Book Now</Link>
            <Link to="/" className="btn btn-secondary">Back to List</Link>
        </div>
    );
};

export default CarDetail;