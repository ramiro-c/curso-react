import React, { Fragment } from "react";

const Letra = ({ letra }) => {
  if (letra.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra Cancion</h2>
      <p>{letra}</p>
    </Fragment>
  );
};

export default Letra;
