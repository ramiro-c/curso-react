import React, { Fragment, useState } from "react";
import { Select, Label } from "./syledComponents";

const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">--- Seleccione ---</option>
        {opciones.map((opcion) => (
          <option key={opcion.cod} value={opcion.cod}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
