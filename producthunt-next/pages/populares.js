import React from "react";
import useProductos from "../hooks/useProductos";

const Populares = () => {
  const productos = useProductos("votos");
  return <ListadoProductos productos={productos} />;
};

export default Populares;
