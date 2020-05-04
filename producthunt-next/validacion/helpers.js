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
  if (valores.password === "") {
    errores.password = "El password es obligatorio";
  } else if (valores.password.length < 8) {
    errores.password = "El password debe ser de al menos 8 caracteres";
  }
  return errores;
}

// validar la empresa
export function validarEmpresa(errores, valores) {
  if (valores.empresa === "") {
    errores.empresa = "Nombre de Empresa es obligatorio";
  }
  return errores;
}

// validar la url
export function validarURL(errores, valores) {
  if (valores.url === "") {
    errores.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL mal formateada o no válida";
  }
  return errores;
}

// validar descripción.
export function validarDescripcion(errores, valores) {
  if (valores.descripcion === "") {
    errores.descripcion = "Agrega una descripción de tu producto";
  }
  return errores;
}
