import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Letra from "./components/Letra";
import Informacion from "./components/Informacion";
import axios from "axios";

function App() {
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [error, guardarError] = useState({ mensaje: "", value: false });
  const [letra, guardarLetra] = useState("");
  const [informacion, guardarInformacion] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra;

      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlInformacion = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios.get(urlLetra),
        axios.get(urlInformacion),
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInformacion(informacion.data.artists[0]);
    };
    consultarApiLetra();
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario
        error={error}
        guardarError={guardarError}
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion informacion={informacion} />
          </div>
          <div className="col-md-6">
            <Letra letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
