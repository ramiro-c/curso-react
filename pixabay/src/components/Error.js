import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => (
  <p className="my-3 p-4 text-center alert alert-info">{mensaje}</p>
);

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
