import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Navegacion from "./Navegacion";
import Buscar from "../ui/Buscar";
import { Boton, Botones } from "../ui/Boton";
import { Nav } from "../ui/Navigation";
import {
  Contenido,
  ContenedorHeader,
  Logo,
  Saludo,
} from "../misc/styledComponents.js";

// firebase
import { FirebaseContext } from "../../firebase";

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
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
              <Saludo>Hola: {usuario.displayName}</Saludo>
              <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>
                Cerrar Sesion
              </Boton>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear_cuenta">
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
