import styled from "@emotion/styled";

export const Contenido = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

export const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;

export const Saludo = styled.div`
  margin-right: 2rem;
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;
