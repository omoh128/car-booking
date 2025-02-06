import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Available Cars</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        <Link to={`/car/${car.id}`}>
                            {car.name} - {car.model} (${car.price_per_day}/day)
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;