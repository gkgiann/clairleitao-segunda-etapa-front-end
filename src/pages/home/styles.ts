import { Col, Stack } from "react-bootstrap";
import styled from "styled-components";

export const HomeContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;

  h1 {
    font-weight: bold;
    font-size: 3.6rem;
  }

  button {
    margin: 4rem 0 6rem;
    padding: 0.8rem 1.2rem;
    border: 0;
    border-radius: 4px;
    font-size: 2rem;
    background: var(--text);
    color: var(--background);

    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MoviesStack = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
`;
