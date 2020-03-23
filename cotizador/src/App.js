import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';

const Contenedor = styled.div`
  min-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;