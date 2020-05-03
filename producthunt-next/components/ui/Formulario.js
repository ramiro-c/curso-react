import styled from "@emotion/styled";

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
  fieldset {
    margin: 2rem 0;
    border: 1px solid var(--gris3);
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input,
  textarea {
    flex: 1;
    padding: 1rem;
  }
  textarea {
    height: 400px;
  }
`;

export const Error = styled.p`
  background-color: red;
  padding: 1rem;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
`;
