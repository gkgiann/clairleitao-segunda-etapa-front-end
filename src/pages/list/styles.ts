import { Container, Stack } from "react-bootstrap";
import styled from "styled-components";

export const ListContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    margin: 2rem 0 4rem;

    h1 {
      font-weight: bold;
      font-size: 4rem;
    }
  }
`;

export const MoviesStack = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
`;
