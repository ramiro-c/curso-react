import styled from "@emotion/styled";

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  padding-left: 2rem;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
