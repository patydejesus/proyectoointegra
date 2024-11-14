import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraficoAlumnos = ({ calificaciones }) => {
    const data = calificaciones.map((practica, index) => ({
        name: `Práctica ${index + 1}`,
        Calificación: practica
    }));

    return (
        <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Calificación" fill="#8884d8" />
        </BarChart>
    );
};

export default GraficoAlumnos;
