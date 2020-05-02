import { useEffect, useState } from "react";
import firebase from "../firebase";

const useAutenticacion = () => {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((user) => {
      user ? guardarUsuarioAutenticado(user) : guardarUsuarioAutenticado(null);
    });
    return () => unsuscribe();
  }, []);

  return usuarioAutenticado;
};
export default useAutenticacion;
