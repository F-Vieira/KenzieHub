import styled from "styled-components";

export const ContainerDashboard = styled.main`
  min-height: 100vh;
  color: var(--snow-blue);

  display: flex;
  flex-direction: column;
  align-items: center;

  section:nth-child(2) {
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

  @media screen and (min-width: 1024px) {
    section:nth-child(2) {
      width: 100%;
      form {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }
    }
    section + section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 50px 1fr 1fr;
      grid-gap: 0 30px;
      h2 {
        grid-column: 1/4;
      }
    }
  }
`;
