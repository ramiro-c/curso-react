import React from "react";
import PropTypes from "prop-types";

const Imagen = ({ imagen }) => {
  const {
    largeImageURL,
    previewURL,
    tags,
    views,
    downloads,
    likes,
    comments,
  } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top mb-4" />
        <div className="card-body">
          <p className="card-text">{views} Visitas</p>
          <p className="card-text">{downloads} Descargas</p>
          <p className="card-text">{likes} Me gustas</p>
          <p className="card-text">{comments} Comentarios</p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
};

export default Imagen;
