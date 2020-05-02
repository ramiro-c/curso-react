export default function validarCrearCuenta(valores) {
  let errores = {};

  // validar el email
  errores = validarEmail(errores, valores);

  // validar el password
  errores = validarPassword(errores, valores);

  return errores;
}
