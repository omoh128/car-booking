import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cars?page=1')
            .then(response => setCars(response.data.data)) // Access paginated data
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Available Cars</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.name} - {car.model} (${car.price_per_day}/day)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;