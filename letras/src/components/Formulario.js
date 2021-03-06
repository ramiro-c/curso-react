import React, { useState } from "react";

const Fromulario = ({ error, guardarError, guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({ artista: "", cancion: "" });
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
      guardarError({
        mensaje: "Todos los campos son obligatorios",
        value: true,
      });
      return;
    }
    guardarError({
      mensaje: "",
      value: false,
    });
    guardarBusquedaLetra(busqueda);
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
              {error.value ? (
                <p className="alert alert-danger text-center p-2">
                  Todos los campos son obligatorios
                </p>
              ) : null}
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
