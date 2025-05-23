import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Nav)`
  gap: 1.6rem;

  a {
    color: var(--text);
    font-weight: bold;
    text-decoration: none;
    font-size: 2rem;
  }

  .active {
    opacity: 0.5;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
