import React, { Fragment, useState } from "react";
import { Select, Label } from "./syledComponents";

const useCriptomoneda = (label, stateInicial, opciones) => {
  // state de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">--- Seleccione ---</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [state, Seleccionar, actualizarState];
};

export default useCriptomoneda;
