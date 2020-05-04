import React from "react";
import Layout from "./Layout";
import DetallesProducto from "./DetallesProducto";

const ListadoProductos = ({ productos }) => {
  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          <ul className="bg-white">
            {productos.map((producto) => (
              <DetallesProducto key={producto.id} producto={producto} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ListadoProductos;
