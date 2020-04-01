import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const { ciudad, pais } = busqueda;
  // control para saber cuando consultar la API
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  useEffect(() => {
    if (consultar) {
      const consultarAPI = async () => {
        const apiKey = "your_api_key"; // movi la api key nueva al .env
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);
        // verificar que se encontraron resultados
        resultado.cod === "404" ? guardarError(true) : guardarError(false);
      };
      consultarAPI();
    }
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />
      <div className="contenedor-form" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {error ?
                <Error mensaje="No se encontraron resultados" /> :
                <Clima resultado={resultado} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
