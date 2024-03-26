import React from 'react';
import CarList from './CarList';

const DemoCarList = () => {
    const cars = ["Audi", "BMW", "Mercedes", "Toyota", "Ford"];
    const cars2 = ["VW", "Volvo", "Skoda", "Opel", "Peugeot"];
    return (
        <div>
            <h2>Car List Type 1:</h2>
            <CarList car={cars} />
            <h2>Car List Type 2:</h2>
            <CarList car={cars2} />
        </div>
    );
};

export default DemoCarList;