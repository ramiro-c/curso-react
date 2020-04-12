import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import Error from "./components/Error";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, actualizarError] = useState(false);
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines" +
        "?country=" +
        pais +
        "&category=" +
        categoria +
        "&apiKey=abb3c58fe67e4ac6856c52d3f1b45de5";
      const consulta = await fetch(url);
      const respuesta = await consulta.json();
      if (respuesta.status !== "ok") {
        actualizarError(true);
      } else {
        guardarNoticias(respuesta.articles);
        actualizarError(false);
      }
    };
    if (categoria.trim() === "" || pais.trim() === "") return;

    consultarAPI();
  }, [categoria, pais]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
          guardarPais={guardarPais}
        />
        {error ? (
          <Error mensaje="Hubo un error, intente nuevamente o elija otras opciones" />
        ) : (
          <ListadoNoticias noticias={noticias} />
        )}
      </div>
    </Fragment>
  );
}

export default App;
