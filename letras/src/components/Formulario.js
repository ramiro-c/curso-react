import React, { useState } from "react";

const Fromulario = () => {
  const [busqueda, guardarBusqueda] = useState({ artista: "", cancion: "" });
  const [error, guardarError] = useState(false);
  const { artista, cancion } = busqueda;

  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const realizarBusqueda = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={realizarBusqueda}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscador de Letras de Canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="">Artista</label>
                    <input
                      type="text"
                      name="artista"
                      className="form-control"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="">Cancion</label>
                    <input
                      type="text"
                      name="cancion"
                      className="form-control"
                      placeholder="Nombre Cancion"
                      onChange={actualizarState}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fromulario;

{
  /*<!--a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
</a>
<a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
</a>
<a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-lastfm"></i>
</a-->*/
}
