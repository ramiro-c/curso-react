import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Titulo } from "../components/misc";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

// firebase
import firebase from "../firebase/firebase";

const STATE_INICIAL = { nombre: "", email: "", password: "" };

const CrearCuenta = () => {
  const [error, guardarError] = useState(false);
  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      guardarError(error.message);
    }
  }

  return (
    <Layout>
      <Titulo>Crear Cuenta</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <Campo>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu Nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>
        {errores.nombre && <Error>{errores.nombre}</Error>}

        <Campo>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>
        {errores.email && <Error>{errores.email}</Error>}

        <Campo>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu Password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>
        {errores.password && <Error>{errores.password}</Error>}

        {error && <Error>{error}</Error>}

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Formulario>
    </Layout>
  );
};

export default CrearCuenta;
