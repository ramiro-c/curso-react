import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  // states de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      // Evitar llamada a la API cuando carga por primera vez
      if (busqueda.trim() === "") return;

      const imagenesPorPagina = 20;
      const url =
        "https://pixabay.com/api/" +
        "?key=16006857-6a9c55fd94fcdf00639fa29af" +
        "&q=" +
        busqueda +
        "&per_page=" +
        imagenesPorPagina +
        "&page=" +
        paginaActual +
        "&image_type=photo" +
        "&orientation=horizontal";

      const consulta = await fetch(url);
      const resultado = await consulta.json();
      setImagenes(resultado.hits);

      // Calcular total de paginas
      const calculoTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      setTotalPaginas(calculoTotalPaginas);

      // Mover la pantalla hacia arriba para evitar tener
      // que hacer scroll en cada cambio de pagina
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarAPI();
  }, [busqueda, paginaActual]);

  // Definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  };

  // Definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron my-5">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {paginaActual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaActual === totalPaginas || totalPaginas === 0 ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
