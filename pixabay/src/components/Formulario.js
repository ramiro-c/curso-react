import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const realizarBusqueda = (e) => {
    e.preventDefault();
    // Validar
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    // Borrar errores anteriores
    setError(false);
    setBusqueda(termino);
  };

  return (
    <form onSubmit={realizarBusqueda}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            placeholder="Busca una imagen, ejemplo: cactus o plantas!"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega una palabra en la busqueda" /> : null}
    </form>
  );
};

Formulario.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
};

export default Formulario;
