// src/Alumnos/ListaAlumnos.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ListaAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://alex.starcode.com.mx/apiAlumnos.php');
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                const data = await response.json();
                setAlumnos(data);
            } catch (error) {
                console.error("Fetch error:", error.message);
            }
        };

        // Llamada inicial y configuración de actualización automática
        fetchData();
        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#ff5733' }}>
                CALIFICACIONES DEL ING. ALEX RAMÍREZ GALINDO
            </h2>

            <div className="row">
                {alumnos.map((alumno) => {
                    // Calcula el promedio de las calificaciones
                    const practicas = Object.values(alumno.practicas).map(Number);
                    const promedio = practicas.reduce((a, b) => a + b, 0) / practicas.length;
                    const aprobado = promedio >= 7;

                    // Configura los datos para la gráfica de barras
                    const data = {
                        labels: ['Promedio'],
                        datasets: [
                            {
                                label: 'Promedio de Calificaciones',
                                data: [promedio],
                                backgroundColor: aprobado ? '#4caf50' : '#f44336',
                                borderColor: aprobado ? '#388e3c' : '#d32f2f',
                                borderWidth: 2,
                            },
                        ],
                    };

                    return (
                        <div key={alumno.id} className="col-md-4 mb-4">
                            <div className="card" style={{
                                borderRadius: '15px', 
                                backgroundColor: '#f9f9f9', 
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: '#333' }}>ID: {alumno.id}</h5>
                                    <p><strong>Cuenta:</strong> {alumno.cuenta}</p>
                                    <p><strong>Nombre:</strong> {alumno.nombre}</p>

                                    <div className="grafica-promedio" style={{ maxWidth: '200px', maxHeight: '200px', margin: '0 auto' }}>
                                        <Bar data={data} options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            scales: {
                                                y: {
                                                    beginAtZero: true,
                                                    max: 10,
                                                    ticks: {
                                                        stepSize: 2,
                                                    },
                                                },
                                            },
                                        }} />
                                    </div>

                                    <p><strong>Promedio General:</strong> {promedio.toFixed(2)}</p>

                                    <div className="text-center mt-3">
                                        {aprobado ? (
                                            <span className="badge bg-success" style={{ fontSize: '14px' }}>Aprobado</span>
                                        ) : (
                                            <span className="badge bg-danger" style={{ fontSize: '14px' }}>Reprobado</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListaAlumnos;
