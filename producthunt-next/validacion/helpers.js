// Validar el nombre del usuario
export function validarNombre(errores, valores) {
  if (valores.nombre === "") {
    errores.nombre = "El nombre es obligatorio";
  }
  return errores;
}

// validar el email
export function validarEmail(errores, valores) {
  if (valores.email === "") {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no válido";
  }
  return errores;
}

// validar el password
export function validarPassword(errores, valores) {
  if (valores.password === "" || valores.password === undefined) {
    errores.password = "El password es obligatorio";
  } else if (valores.password.length < 8) {
    errores.password = "El password debe ser de al menos 8 caracteres";
  }
  return errores;
}
