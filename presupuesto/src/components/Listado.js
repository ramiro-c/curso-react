import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map(gasto => (
      <Gasto
        id={gasto.id}
        gasto={gasto}
      />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Listado;