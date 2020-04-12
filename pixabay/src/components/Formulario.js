import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState(false);

  const realizarBusqueda = (e) => {
    e.preventDefault();
    // Validar
    if (busqueda.trim() === "") {
      setError(true);
      return;
    }
    // Borrar errores anteriores
    setError(false);

  };

  return (
    <form onSubmit={realizarBusqueda}>
      <div>
        <div>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Busca una imagen, ejemplo: cactus o plantas!"
          />
        </div>
      </div>
      <div>
        <input type="submit" placeholder="Buscar" />
      </div>
      {error ? (
        <Error mensaje="Agrega una palabra en la busqueda" />
      ) : null}
    </form>
  );
};

export default Formulario;
