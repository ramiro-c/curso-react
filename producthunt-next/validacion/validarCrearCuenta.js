import { validarNombre, validarEmail, validarPassword } from "./helpers";

export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar el nombre del usuario
  errores = validarNombre(errores, valores);

  // validar el email
  errores = validarEmail(errores, valores);

  // validar el password
  errores = validarPassword(errores, valores);

  return errores;
}
