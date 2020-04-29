import React, { Fragment } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Navegacion from "./Navegacion";
import Buscar from "../ui/Buscar";
import Boton from "../ui/Boton";

const Contenido = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;

const Botones = styled.div`
  display: flex;
  align-items: center;
`;

const Saludo = styled.div`
  margin-right: 2rem;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const usuario = true;

  return (
    <Contenido>
      <ContenedorHeader>
        <Nav>
          <Link href="/">
            <Logo>P</Logo>
          </Link>
          <Buscar />
          <Navegacion />
        </Nav>
        <Botones>
          {usuario ? (
            <Fragment>
              <Saludo>Hola: Ramiro</Saludo>
              <Boton bgColor="true">Cerrar Sesion</Boton>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </Fragment>
          )}
        </Botones>
      </ContenedorHeader>
    </Contenido>
  );
};

export default Header;
