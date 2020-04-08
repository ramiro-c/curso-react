import React from "react";
import styled from "@emotion/styled";
import { string } from "prop-types";

const Mensaje = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ mensaje }) => <Mensaje>{mensaje}</Mensaje>;

Error.propTypes = { mensaje: string.isRequired };

export default Error;
