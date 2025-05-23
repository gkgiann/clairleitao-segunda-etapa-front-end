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
  }
`;

export const MoviesStack = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
`;
