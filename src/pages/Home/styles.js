import styled from "styled-components";

export const ContainerHome = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--snow-blue);
  text-align: center;

  p {
    margin: 1.5rem 0;
  }
  div {
    button + button {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    p {
      width: 600px;
      font-size: 1.5rem;
      margin: 4rem 0;
    }
    div {
      button + button {
        margin-left: 2rem;
        margin-top: 0;
      }
    }
  }
`;
