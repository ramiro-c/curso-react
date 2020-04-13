import React, { useState, useEffect } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import Frase from './components/Frase';
import { FraseType } from './types/types';
import Imagen from './components/Imagen';

const Contenedor: StyledComponent<any, any, {}> = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton: StyledComponent<any, any, {}> = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 3rem auto;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400;
  }
`;

interface Resultado {
  "quote": string,
  "author": string
}

function App() {

  const [frase, guardarFrase] = useState<FraseType>({ quote: '', author: '' });

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuestaAPI: Response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const fraseResultado: Array<Resultado> = await respuestaAPI.json();

    const quote: string = fraseResultado[0].quote;
    const author: string = fraseResultado[0].author;

    guardarFrase({
      quote,
      author
    });
  };

  return (
    <Contenedor>
      <Imagen />
      <Frase frase={frase} />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
