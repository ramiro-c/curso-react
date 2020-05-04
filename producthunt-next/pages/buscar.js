import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListadoProductos from "../components/layout/ListadoProductos";

const Buscar = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  // todos los productos
  const { productos } = useProductos("creado");
  const [productosFiltrados, guardarProductosFiltrados] = useState([]);

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const productosFiltrados = productos.filter((producto) => {
      return (
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda)
      );
    });
    guardarProductosFiltrados(productosFiltrados);
  }, [q, productos]);

  return <ListadoProductos productos={productosFiltrados} />;
};

export default Buscar;
