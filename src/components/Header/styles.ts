import { Container } from "react-bootstrap";
import styled from "styled-components";

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(238, 246, 250, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

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
