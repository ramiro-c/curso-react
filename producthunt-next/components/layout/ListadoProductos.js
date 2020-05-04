import React from "react";
import Layout from "../components/layout/Layout";
import DetallesProducto from "../components/layout/DetallesProducto";

const ListadoProductos = ({ productos }) => {
  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          <div className="bg-white">
            {productos.map((producto) => (
              <DetallesProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListadoProductos;
