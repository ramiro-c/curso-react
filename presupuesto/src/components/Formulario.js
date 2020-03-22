import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ setGasto, setCrearGasto }) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0.0);
  const [error, setError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();
    // Validar
    if (nombre.trim() === '' || cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // Construir el gasto
    const gasto = {
      nombre,     // Esto es igual a nombre: nombre
      cantidad,
      id: shortid.generate()
    }
    // Pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);
    // Resetear el formulario
    setCantidad(0);
    setNombre('');
  };

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aqui</h2>

      {error ? <Error mensaje="Error, todos los campos son obligatorios o el presupuesto es incorrecto" /> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
      />
    </form>
  );
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;