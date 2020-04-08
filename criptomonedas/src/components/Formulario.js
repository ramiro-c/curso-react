import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

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
  const [listaCriptomonedas, guardarListaCriptomonedas] = useState([]);
  const MONEDAS = [
    { cod: "USD", nombre: "Dolar estadounidense" },
    { cod: "MXN", nombre: "Peso mexicano" },
    { cod: "EUR", nombre: "Euro" },
    { cod: "GBP", nombre: "Libra esterlina" },
    { cod: "ARS", nombre: "Peso argentino" },
  ];
  // Label, stateInicial, opciones
  const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);
  const [criptomoneda, SelectCriptomonedas] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listaCriptomonedas
  );
  const [error, guardarError] = useState(false);
  
  // onSubmit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    // validar los campos
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarListaCriptomonedas(resultado);
    };
    consultarAPI();
  }, [guardarListaCriptomonedas]);

  return (
    <form onSubmit={cotizarMoneda}>
      <SelectMonedas />
      <SelectCriptomonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
