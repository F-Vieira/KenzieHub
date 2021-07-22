import styled from "styled-components";

export const ContainerDashboard = styled.main`
  min-height: 100vh;
  color: var(--snow-blue);

  display: flex;
  flex-direction: column;
  align-items: center;

  section:first-child {
    text-align: center;
    margin-bottom: 2rem;
    h2 {
      margin: 1rem 0;
    }
  }
  section + section {
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    > div {
      margin-bottom: 2rem;
    }
  }
`;
