import { Container } from "react-bootstrap";
import styled from "styled-components";

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.2rem auto;

  img {
    width: 3.6rem;
  }

  h1 {
    font-weight: bold;
  }

  .logo {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1.2rem;
  }

  nav {
    gap: 1.6rem;
  }

  a {
    color: var(--text);
    font-weight: bold;
    text-decoration: none;
    font-size: 2rem;
  }

  .active {
    opacity: 0.5;
  }
`;
