
import React from 'react';

const CarList = ({ car }: CarProps) => {
    return (
        <ul>
            {car.map((car, index) => (
                <li key={index}>{car}</li>
            ))}
        </ul>
    );
};

export default CarList;

