import React from 'react';
import './App.css';
import ListaDocentes from './components/ListaDocentes'; // Asegúrate de tener este archivo en `src/components`
import ListaAlumnos from './components/ListaAlumnos';   // Asegúrate de tener este archivo en `src/components`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Información de Docentes y Alumnos</h1>
      </header>
      <main>
        <ListaDocentes />    {/* Componente para mostrar la lista de docentes */}
        <ListaAlumnos />     {/* Componente para mostrar la lista de alumnos con gráficas */}
      </main>
    </div>
  );
}

export default App;
