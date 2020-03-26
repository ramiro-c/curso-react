import React from 'react';
import {objectOf, string } from 'prop-types';
import styled from '@emotion/styled';
import {primerLetraAMayuscula} from '../helper';

const ContenerdorResumen = styled.div`
    background-color: #00838F;
    padding: 1rem;
    text-align: center;
    color: white;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    // Extraer datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '')
        return null;

    return (
        <ContenerdorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primerLetraAMayuscula(marca)}</li>
                <li>Plan: {primerLetraAMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenerdorResumen>
    );
}

Resumen.propTypes = {
    datos: objectOf(string).isRequired
}

export default Resumen;