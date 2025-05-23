import styled from "styled-components";

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  transition: 0.3s;

  &:hover {
    scale: calc(1.1);
  }

  img {
    width: 28rem;
    border-radius: 8px;
  }
`;
