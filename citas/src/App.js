import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Obtener las citas de localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales)
    citasIniciales = []

  // Todas las citas
  const [citas, setCitas] = useState(citasIniciales);

  // Colocar las citas en el storage
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas,citasIniciales]);
  // Recuperar las citas y agregarlas al listado
  const crearCita = cita => {
    setCitas([
      // Copia todas las citas que estaban antes y 
      // agrega la cita nueva
      ...citas,
      cita
    ])
  };

  // Eliminar la cita por id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  };

  // Titulo condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>Administracion de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                id={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;