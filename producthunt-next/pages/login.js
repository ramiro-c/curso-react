import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Titulo } from "../components/misc/styledComponents";
import { InputSubmit } from "../components/ui/Input";
import { Formulario, Campo, Error } from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

// firebase
import firebase from "../firebase";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario ", error.message);
      guardarError(error.message);
    }
  }

  return (
    <Layout>
      <Titulo>Iniciar Sesion</Titulo>
      <Formulario onSubmit={handleSubmit}>
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

        <InputSubmit type="submit" value="Iniciar Sesion" />
      </Formulario>
    </Layout>
  );
};

export default Login;
