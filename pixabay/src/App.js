import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  // states de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      // Evitar llamada a la API cuando carga por primera vez
      if (busqueda.trim() === "") return;

      const imagenesPorPagina = 30;
      const url =
        "https://pixabay.com/api/" +
        "?key=16006857-6a9c55fd94fcdf00639fa29af" +
        "&q=" +
        busqueda +
        "&per_page=" +
        imagenesPorPagina +
        "&image_type=photo";

      const consulta = await fetch(url);
      const resultado = await consulta.json();
      setImagenes(resultado.hits);
      console.log(imagenes);
    };
    consultarAPI();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron my-5">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
