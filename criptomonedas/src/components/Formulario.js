import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  transition: background-color 0.3s ease-in;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  &:hover {
    transition: background-color 0.3s ease-out;
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const MONEDAS = [
    { cod: "USD", nombre: "Dolar estadounidense" },
    { cod: "MXN", nombre: "Peso mexicano" },
    { cod: "EUR", nombre: "Euro" },
    { cod: "GBP", nombre: "Libra esterlina" },
    { cod: "ARS", nombre: "Peso argentino" },
  ];
  // Label, stateInicial, opciones
  const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);

  return (
    <form>
      <SelectMonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
