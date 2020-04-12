import React from "react";
import PropTypes from "prop-types";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria, guardarPais }) => {
  const CATEGORIAS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];
  const PAISES = [
    { value: "ar", label: "Argentina" },
    { value: "mx", label: "Mexico" },
    { value: "vz", label: "Venezuela" },
    { value: "br", label: "Brasil" },
    { value: "co", label: "Colombia" },
    { value: "ru", label: "Rusia" },
    { value: "cu", label: "Cuba" },
  ];
  const [categoria, pais, SelectCategorias, SelectPaises] = useSelect(
    "technology",
    "ar",
    CATEGORIAS,
    PAISES
  );

  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
    guardarPais(pais);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>
            Encuentra Noticias por Categoria y Pais
          </h2>
          <SelectPaises />
          <SelectCategorias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
  guardarPais: PropTypes.func.isRequired,
};

export default Formulario;
