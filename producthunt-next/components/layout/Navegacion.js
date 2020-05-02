import React, { useContext } from "react";
import Link from "next/link";
import { Navigation } from "../ui/Navigation";

// firebase
import { FirebaseContext } from "../../firebase";

const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Navigation>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/populares">
        <a>Populares</a>
      </Link>
      {usuario && (
        <Link href="/nuevo_producto">
          <a>Nuevo Producto</a>
        </Link>
      )}
    </Navigation>
  );
};

export default Navegacion;
