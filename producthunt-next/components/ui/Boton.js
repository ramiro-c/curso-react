import styled from "@emotion/styled";

export const Boton = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin: 2rem auto;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "black")};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Botones = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  background-color: white;
  position: absolute;
  right: 1rem;
  top: 1px;
  border: none;
  text-indent: -9999px;
  &:hover {
    cursor: pointer;
  }
`;
