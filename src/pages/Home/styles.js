import styled from "styled-components";

export const ContainerHome = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--snow-blue);

  p {
    margin: 1.5rem 0;
  }
  button + button {
    margin-top: 2rem;
  }
`;
