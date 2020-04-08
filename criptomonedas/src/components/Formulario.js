import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { func } from "prop-types";
import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";

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

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  const [listaCriptomonedas, guardarListaCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);
  const [mensaje, guardarMensaje] = useState("");

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

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      // Resultado de la API
      const resultado = await axios.get(url);
      if (resultado.Response !== "Error") {
        guardarListaCriptomonedas(resultado.data.Data);
      } else {
        guardarError(true);
        guardarMensaje("Hubo un error, intente con otras opciones");
      }
    };
    consultarAPI();
  }, [guardarListaCriptomonedas]);

  // onSubmit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    // Validar los campos
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      guardarMensaje("Todos los campos son obligatorios");
      return;
    }
    // Limpiar errores anteriores
    guardarError(false);
    // Pasar los datos al componente principal
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje={mensaje} /> : null}
      <SelectMonedas />
      <SelectCriptomonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

Formulario.propTypes = {
  guardarMoneda: func.isRequired,
  guardarCriptomoneda: func.isRequired
};

export default Formulario;
