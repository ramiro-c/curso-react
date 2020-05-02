import React from "react";
import { ButtonSubmit } from "./Boton";
import { InputText } from "./Input";
import { Form } from "./Formulario";

const Buscar = () => {
  return (
    <Form>
      <InputText type="text" placeholder="Buscar Productos" />
      <ButtonSubmit type="submit" />
    </Form>
  );
};

export default Buscar;
