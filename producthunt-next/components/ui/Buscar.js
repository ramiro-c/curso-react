import React from "react";
import styled from "@emotion/styled";

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const ButtonSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  background-color: white;
  position: absolute;
  right: 1rem;
  top: 1px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  position: relative;
`;

const Buscar = () => {
  return (
    <Form>
      <InputText type="text" placeholder="Buscar Productos" />
      <ButtonSubmit type="submit" />
    </Form>
  );
};

export default Buscar;
