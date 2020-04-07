import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {
  // state de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label htmlFor="monedas">{label}</Label>
      <Select
        name="monedas"
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
      >
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
