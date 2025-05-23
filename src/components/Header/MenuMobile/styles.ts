import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const DropdownContainer = styled(Dropdown)`
  .dropdown-toggle {
    font-size: 2rem;
    font-weight: bold;
    padding: 0.4rem 1.2rem;
    background: var(--text);
    border: 0;
  }

  a {
    color: var(--text);
    font-weight: bold;
    text-decoration: none;
    font-size: 2rem;
    padding: 1.2rem;
  }

  .active {
    opacity: 0.5;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;
