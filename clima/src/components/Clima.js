import React from 'react';
import { object } from 'prop-types';

const Clima = ({ resultado }) => {
  // extraer el nombre de la ciudad y los datos
  const { name, main } = resultado;

  if (!name) return null;

  // transformar la temperatura a grados centigrados
  const temperatura = parseFloat(main.temp - 273.15, 10).toFixed(2);
  const temperaturaMaxima = parseFloat(main.temp_max - 273.15, 10).toFixed(2);
  const temperaturaMinima = parseFloat(main.temp_min - 273.15, 10).toFixed(2);

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {temperatura} <span>&#x2103;</span>
        </p>
        <p>Temperatura Maxima:
          {temperaturaMaxima} <span>&#x2103;</span>
        </p>
        <p>Temperatura Minima:
          {temperaturaMinima} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
}

Clima.propTypes = {
  resultado: object.isRequired
}

export default Clima;