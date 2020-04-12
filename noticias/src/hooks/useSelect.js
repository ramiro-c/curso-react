import React, { useState } from "react";

const useSelect = (
  stateInicialCategoria,
  stateInicialPais,
  categorias,
  paises
) => {
  const [stateCategoria, actualizarStateCategoria] = useState(
    stateInicialCategoria
  );
  const [statePais, actualizarStatePais] = useState(stateInicialPais);

  const SelectCategorias = () => (
    <select
      className="browser-default"
      value={stateCategoria}
      onChange={(e) => actualizarStateCategoria(e.target.value)}
    >
      {categorias.map((categoria) => (
        <option key={categoria.value} value={categoria.value}>
          {categoria.label}
        </option>
      ))}
    </select>
  );
  const SelectPaises = () => (
    <select
      className="browser-default"
      value={statePais}
      onChange={(e) => actualizarStatePais(e.target.value)}
    >
      {paises.map((pais) => (
        <option key={pais.value} value={pais.value}>
          {pais.label}
        </option>
      ))}
    </select>
  );
  return [stateCategoria, statePais, SelectCategorias, SelectPaises];
};

export default useSelect;
