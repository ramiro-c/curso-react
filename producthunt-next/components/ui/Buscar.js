import React, { useState } from "react";
import Router from "next/router";
import { ButtonSubmit } from "./Boton";
import { InputText } from "./Input";
import { Form } from "./Formulario";

const Buscar = () => {
  const [busqueda, guardarBusqueda] = useState("");

  const buscarProducto = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") return;

    // redireccionar a /buscar
    Router.push({
      pathname: "/buscar",
      query: { q: busqueda },
    });
  };

  return (
    <Form onSubmit={buscarProducto}>
      <InputText
        type="text"
        placeholder="Buscar Productos"
        onChange={(e) => guardarBusqueda(e.target.value)}
      />
      <ButtonSubmit type="submit" />
    </Form>
  );
};

export default Buscar;
