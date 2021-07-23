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
    position: relative;
    width: 100%;
    button:first-child {
      font-size: 14px;
      width: 60px;
      height: 30px;
      position: absolute;
      right: 15px;
      top: 10px;
    }
    h2 {
      margin: 3rem 0 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        display: none;
      }
      .container_status {
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        .status_select {
          cursor: pointer;
          width: 280px;
          height: 50px;
          border-radius: 10px;
          padding-left: 0.5rem;
          color: var(--dark-blue);
          background-color: var(--snow-blue);
        }
      }
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
        flex-direction: row;
        width: 100%;
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
