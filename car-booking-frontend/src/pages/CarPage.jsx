import React from 'react';
import { useParams } from 'react-router-dom';
import CarDetail from '../components/CarDetail';
import Navbar from '../components/Navbar';

const CarPage = () => {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <CarDetail id={id} />
        </div>
    );
};

export default CarPage;