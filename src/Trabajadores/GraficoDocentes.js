import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const GraficoDocentes = ({ docentes }) => {
  // Generamos una función para asignar un color único a cada ID
  const getColorById = (id) => {
    const colors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#800080', '#FFA500', '#FF69B4']; 
    return colors[id % colors.length]; // Selecciona un color basado en el módulo de la longitud del array
  };

  // Formateamos los datos para que el gráfico solo tome el nombre y el ID
  const data = docentes.map(docente => ({
    nombre: docente.nombre,
    id: docente.id,
  }));

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>"Gráfica De Docentes ID"</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="id">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorById(entry.id)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <h2 className="text-center font-weight-bold mb-4" style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'black' }}>
                "Lista de Docentes Pro II"
            </h2>
    </div>
  );
};

export default GraficoDocentes;
