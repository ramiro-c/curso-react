import React, { useState } from 'react';

const Formulario = () => {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [error, guardarError] = useState(false);
  const { ciudad, pais } = busqueda;

  const handleChange = e => {
    // actualizar state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // validacion
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true);
      return;
    }
    // eliminar error anterior
    guardarError(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >Buscar Clima</button>
      </div>
    </form>
  );
}

export default Formulario;