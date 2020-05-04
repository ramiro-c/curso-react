import React, { useEffect, useContext, useState, Fragment } from "react";
import { useRouter } from "next/router";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Layout from "../../components/layout/Layout";
import Error404 from "../../components/layout/Error404";
import { Titulo } from "../../components/misc/styledComponents";
import { Boton } from "../../components/ui/Boton";
import {
  Comentario,
  Subtitulo,
  ContenedorProducto,
  CreadorProducto,
  Votar,
} from "../../components/ui/Producto";

//firebase
import { FirebaseContext } from "../../firebase";
import { Campo } from "../../components/ui/Formulario";
import { InputSubmit } from "../../components/ui/Input";

const Producto = () => {
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [consultarBaseDeDatos, guardarConsultarBaseDeDatos] = useState(true);

  // routing para obtener el id actual
  const router = useRouter();
  // obtener el id
  const {
    query: { id },
  } = router;

  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarBaseDeDatos) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          guardarProducto(producto.data());
        } else {
          guardarError(true);
        }
        guardarConsultarBaseDeDatos(false);
      };
      obtenerProducto();
    }
  }, [id]);

  const {
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    urlImagen,
    votos,
    creador,
    haVotado,
  } = producto;

  if (Object.keys(producto).length === 0 && !error) return "Cargando...";

  if (error) {
    return (
      <Error404 mensaje="No se puede mostrar el producto que esta buscando" />
    );
  }

  const votarProducto = () => {
    if (!usuario) {
      router.push("/login");
    }
    // obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;

    // verificar si el usuario ha votado
    if (haVotado.includes(usuario.uid)) return;

    // agregar el id del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];

    // actualizar en la bbdd
    firebase.db
      .collection("productos")
      .doc(id)
      .update({ votos: nuevoTotal, haVotado: nuevoHaVotado });

    // actualizar el state
    guardarProducto({
      ...producto,
      votos: nuevoTotal,
    });

    // hay un voto, por lo tanto consultar a la bbdd
    guardarConsultarBaseDeDatos(true);
  };

  const comentarioChange = (e) => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  // identifica si el comentario es del creador del producto
  const esCreador = (id) => {
    if (creador.id == id) {
      return true;
    }
  };

  const agregarComentario = (e) => {
    e.preventDefault();

    if (!usuario) {
      return router.push("/login");
    }

    // información extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    // tomar copia de comentarios y agregarlos al arreglo
    const nuevosComentarios = [...comentarios, comentario];

    // actualizar la bbdd
    firebase.db.collection("productos").doc(id).update({
      comentarios: nuevosComentarios,
    });

    // actualizar el state
    guardarProducto({
      ...producto,
      comentarios: nuevosComentarios,
    });

    // hay un comentario, por lo tanto consultar a la bbdd
    guardarConsultarBaseDeDatos(true);
  };

  // función que revisa que el creador del producto sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;

    if (creador.id === usuario.uid) {
      return true;
    }

    return false;
  };

  // elimina un producto de la bbdd
  const eliminarProducto = async () => {
    if (!usuario) return router.push("/login");

    if (creador.id !== usuario.uid) return router.push("/");

    try {
      await firebase.db.collection("productos").doc(id).delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="contenedor">
        <Titulo>{nombre}</Titulo>
        <ContenedorProducto>
          <div>
            <p>
              Publicado hace:&nbsp;
              {formatDistanceToNow(new Date(creado), { locale: es })}
            </p>
            <p>
              Por: {creador.nombre} de {empresa}
            </p>
            <img src={urlImagen} />
            <p>{descripcion}</p>
            {usuario && (
              <Fragment>
                <h2>Agrega tu comentario</h2>
                <form onSubmit={agregarComentario}>
                  <Campo>
                    <input
                      placeholder="Escriba aqui su comentario"
                      type="text"
                      name="mensaje"
                      onChange={comentarioChange}
                    />
                  </Campo>
                  <InputSubmit type="submit" value="Agregar Comentario" />
                </form>
              </Fragment>
            )}
            <Subtitulo>Comentarios</Subtitulo>
            {comentarios.length === 0 ? (
              "Aún no hay comentarios"
            ) : (
              <ul>
                {comentarios.map((comentario, i) => (
                  <Comentario key={`${comentario.usuarioId}-${i}`}>
                    <p>{comentario.mensaje}</p>
                    <p>
                      Escrito por:
                      <span> {comentario.usuarioNombre}</span>
                    </p>
                    {esCreador(comentario.usuarioId) && (
                      <CreadorProducto>Es Creador</CreadorProducto>
                    )}
                  </Comentario>
                ))}
              </ul>
            )}
          </div>
          <aside>
            <Boton target="_blank" bgColor="true" href={url}>
              Visitar URL
            </Boton>

            <Votar>
              <p>{votos} Votos</p>

              {usuario && <Boton onClick={votarProducto}>Votar</Boton>}
            </Votar>
          </aside>
        </ContenedorProducto>
        {puedeBorrar() && (
          <Boton onClick={eliminarProducto}>Eliminar Producto</Boton>
        )}
      </div>
    </Layout>
  );
};

export default Producto;
