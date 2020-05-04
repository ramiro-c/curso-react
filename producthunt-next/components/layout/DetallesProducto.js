import React from "react";
import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import {
  Producto,
  DescripcionProducto,
  Imagen,
  Titulo,
  Comentarios,
  Votos,
  TextoDescripcion,
} from "../ui/Producto";

const DetallesProducto = ({ producto }) => {
  const {
    id,
    comentarios,
    creado,
    descripcion,
    nombre,
    urlImagen,
    votos,
  } = producto;

  return (
    <Producto>
      <DescripcionProducto>
        <div>
          <Imagen src={urlImagen} />
        </div>

        <div>
          <Link href="/productos/[id]" as={`/productos/${id}`}>
            <Titulo>{nombre}</Titulo>
          </Link>
          <TextoDescripcion>{descripcion}</TextoDescripcion>
          <Comentarios>
            <div>
              <img src="/static/img/comentario.png" />
              <p>{comentarios.length} Comentarios</p>
            </div>
          </Comentarios>
          <p>
            Publicado hace:&nbsp;
            {formatDistanceToNow(new Date(creado), { locale: es })}
          </p>
        </div>
      </DescripcionProducto>

      <Votos>
        <div> &#9650; </div>
        <p>{votos}</p>
      </Votos>
    </Producto>
  );
};

export default DetallesProducto;
