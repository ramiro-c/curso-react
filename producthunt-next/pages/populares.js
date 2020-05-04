import React from "react";
import useProductos from "../hooks/useProductos";
import ListadoProductos from "../components/layout/ListadoProductos";

const Populares = () => {
  const { productos } = useProductos("votos");
  return <ListadoProductos productos={productos} />;
};

export default Populares;
