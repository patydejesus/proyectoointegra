import React, { useEffect, useState } from 'react';
import '../App.css';
import GraficoAlumnos from './GraficoAlumnos';

const ListaAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await fetch('https://alex.starcode.com.mx/apiAlumnos.php');
                const data = await response.json();
                setAlumnos(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAlumnos();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Calificaciones de Alumnos</h2>

            <div className="row">
                {alumnos.map((alumno) => (
                    <div key={alumno.id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>{alumno.nombre}</h5>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {alumno.id}</p>
                                <p><strong>Cuenta:</strong> {alumno.cuenta}</p>
                                <GraficoAlumnos calificaciones={alumno.calificaciones} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaAlumnos;
