import React from 'react';
import styled, { StyledComponent } from '@emotion/styled';

const ContenedorFrase: StyledComponent<any, any, {}> = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width:800px;
  
  margin-top: 5rem;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight:bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

interface FraseProps {
  frase: {
    quote: string,
    author: string
  }
}

const Frase: React.FC<FraseProps> = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </ContenedorFrase>
  );
}

export default Frase;