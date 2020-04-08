import React from "react";
import styled from "@emotion/styled";

const Resultado = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <Resultado>
      <Precio>
        Precio actual es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación de las últimas 24 horas:{" "}
        <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </Resultado>
  );
};

export default Cotizacion;
