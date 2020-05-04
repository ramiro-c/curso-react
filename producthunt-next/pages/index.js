import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import DetallesProducto from "../components/layout/DetallesProducto";

// firebase
import { FirebaseContext } from "../firebase";

const Home = () => {
  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(handleSnapshot);
    };
    obtenerProductos();
  }, []);

  function handleSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarProductos(productos);
  }
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

export default Home;
