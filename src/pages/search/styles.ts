import { Col, Stack } from "react-bootstrap";
import styled from "styled-components";

export const SearchContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;

  padding-bottom: 4rem;

  h1 {
    font-weight: bold;
    font-size: 4rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    input {
      padding: 0.8rem 1.2rem;
      border: 0;
      border-radius: 4px;
      font-size: 2rem;
    }
  }

  button {
    padding: 0.8rem 1.6rem;
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
