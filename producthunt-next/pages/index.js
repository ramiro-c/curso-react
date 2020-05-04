import React from "react";
import useProductos from "../hooks/useProductos";
import ListadoProductos from "../components/layout/ListadoProductos";

const Home = () => {
  const { productos } = useProductos("creado");
  return <ListadoProductos productos={productos} />;
};

export default Home;
