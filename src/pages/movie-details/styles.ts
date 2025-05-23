import { Col } from "react-bootstrap";
import styled from "styled-components";

export const MovieDetailsContainer = styled(Col)`
  margin: 6rem 0 2.8rem;
  text-align: center;

  img {
    max-width: 70vw;
  }

  .row {
    gap: 4rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: flex-start;

    padding: 0 2rem 0;

    p {
      text-align: justify;
      font-size: 2.4rem;
      opacity: 0.7;
    }

    strong {
      font-size: 2rem;
    }

    .average {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
      font-weight: bold;
      padding: 1.2rem;
      background: lightblue;
      width: 6.8rem;
      height: 6.8rem;
      border-radius: 100%;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
