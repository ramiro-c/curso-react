import React from 'react';
import { string } from 'prop-types';

const Error = ({ mensaje }) => (
    <p className="red darken-4 error">{mensaje}</p>
);

Error.propTypes = {
    mensaje: string.isRequired
}

export default Error;