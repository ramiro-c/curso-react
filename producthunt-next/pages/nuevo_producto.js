import React, { useState, useContext } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import Error404 from "../components/layout/404";
import { Titulo } from "../components/misc/styledComponents";
import { InputSubmit } from "../components/ui/Input";
import { Formulario, Campo, Error } from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearProducto from "../validacion/validarCrearProducto";

// firebase
import { FirebaseContext } from "../firebase";
import FileUploader from "react-firebase-file-uploader";

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  imagen: "",
  url: "",
  descripcion: "",
};

const NuevoProducto = () => {
  // state de las imagenes
  const [nombreImagen, guardarNombreImagen] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlImagen, guardarUrlImagen] = useState("");
  const [error, guardarError] = useState(false);
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

  const { nombre, empresa, imagen, url, descripcion } = valores;

  // context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {
    // si el usuario no esta autenticado llevar al login
    if (!usuario) return Router.push("/login");

    // crear el objeto de nuevo producto
    const producto = {
      nombre,
      empresa,
      url,
      urlImagen,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      haVotado: [],
    };
    //insertarlo en la bbdd
    firebase.db.collection("productos").add(producto);

    router.push("/");
  }

  // handlers
  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = (progreso) => guardarProgreso({ progreso });

  const handleUploadError = (error) => {
    guardarError(error);
    console.error(error);
  };

  const handleUploadSuccess = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombreImagen(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url) => guardarUrlImagen(url));
  };

  if (!usuario) return <Error404 />;

  return (
    <Layout>
      <Titulo>Nuevo Producto</Titulo>
      <Formulario onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Información General</legend>
          <Campo>
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              placeholder="Nombre Empresa o Compañia"
              name="empresa"
              value={empresa}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.empresa && <Error>{errores.empresa}</Error>}
          <Campo>
            <label htmlFor="imagen">Imagen</label>
            <FileUploader
              accept="image/*"
              id="imagen"
              name="imagen"
              randomizeFilename
              storageRef={firebase.storage.ref("productos")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </Campo>
          <Campo>
            <label htmlFor="url">URL</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="URL de tu producto"
              value={url}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.url && <Error>{errores.url}</Error>}
        </fieldset>

        <fieldset>
          <legend>Sobre tu Producto</legend>
          <Campo>
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.descripcion && <Error>{errores.descripcion}</Error>}
        </fieldset>

        {error && <Error>{error} </Error>}

        <InputSubmit type="submit" value="Crear Producto" />
      </Formulario>
    </Layout>
  );
};

export default NuevoProducto;
