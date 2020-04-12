import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines" +
        "?country=ar" +
        `&category=${categoria}` +
        "&apiKey=abb3c58fe67e4ac6856c52d3f1b45de5";
      const consulta = await fetch(url);
      const respuesta = await consulta.json();
      guardarNoticias(respuesta.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
