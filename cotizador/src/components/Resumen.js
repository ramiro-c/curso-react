import React, { Fragment } from 'react';
import {objectOf, string } from 'prop-types';

const Resumen = ({ datos }) => {
    // Extraer datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '')
        return null;

    return (
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </Fragment>
    );
}

Resumen.propTypes = {
    datos: objectOf(string).isRequired
}

export default Resumen;