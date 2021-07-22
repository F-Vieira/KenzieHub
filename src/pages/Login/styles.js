import styled from "styled-components";

export const ContainerLogin = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--snow-blue);

  h2 {
    margin: 2rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    margin-bottom: 1rem;
  }

  button {
  }

  p {
    margin: 1.5rem 0;
    a {
      color: var(--light-blue);
    }
  }
`;
