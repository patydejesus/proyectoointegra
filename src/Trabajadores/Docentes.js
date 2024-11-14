import React, { useEffect, useState } from 'react';
import '../App.css';
import GraficoDocentes from './GraficoDocentes';

const ListaDocentes = () => {
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://alex.starcode.com.mx/apiBD.php');
                const data = await response.json();
                setDocentes(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mt-4">
           
            <h1 className="text-center font-weight-bold mb-4" style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'black' }}>
                Docentes Ingeniería Informática TESSFP
            </h1>

            {/* Aquí mostramos el gráfico de IDs */}
            <GraficoDocentes docentes={docentes} />

            {/* Aquí mostramos las tarjetas de los docentes */}
            <div className="row">
                {docentes.map((docente) => (
                    <div key={docente.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm" style={{ backgroundColor: '#a1c4f7' }}>
                            <div className="card-header text-white" style={{ backgroundColor: '#3a7bd5' }}>
                                <h5 className="mb-0" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                    {docente.nombre}
                                </h5>
                            </div>
                            <div className="card-body">
                              
                                <p className="card-text" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                    <strong>ID:</strong> {docente.id}
                                </p>
                                <p className="card-text" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                    <strong>Clave ISSEMYN:</strong> {docente.issemyn}
                                </p>
                                <p className="card-text" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                    <strong>Sexo:</strong> {docente.sexo}
                                </p>
                                <p className="card-text" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                    <strong>Teléfono:</strong> {docente.telefono}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaDocentes;
