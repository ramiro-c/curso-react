import {
  validarNombre,
  validarDescripcion,
  validarEmpresa,
  validarURL,
} from "./helpers";

export default function validarCrearProducto(valores) {
  let errores = {};

  // Validar el nombre del usuario
  errores = validarNombre(errores, valores);
  // validar empresa
  errores = validarEmpresa(errores, valores);
  // validar la URL
  errores = validarURL(errores, valores);
  // validar descripción.
  errores = validarDescripcion(errores, valores);

  return errores;
}
