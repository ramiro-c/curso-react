import React from "react";
import useProductos from "../hooks/useProductos";

const Home = () => {
  const productos = useProductos("creado");
  return <ListadoProductos productos={productos} />;
};

export default Home;
