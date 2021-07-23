import styled from "styled-components";

export const ContainerSignup = styled.main`
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
    div {
      margin-bottom: 1rem;
    }

    .container_course {
      display: flex;
      flex-direction: column;
      .course_select {
        cursor: pointer;
        width: 280px;
        height: 50px;
        border-radius: 10px;
        padding-left: 0.5rem;
        color: var(--dark-blue);
        background: var(--snow-blue);
      }
      .course_error {
        height: 20px;
        color: var(--red);
        margin-top: 5px;
        margin-left: 10px;
      }
    }
  }

  p {
    margin: 1.5rem 0;
    a {
      color: var(--light-blue);
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 40px;
      grid-gap: 20px 15px;
      div {
        margin-bottom: 0;
      }
      div:nth-child(5) {
        grid-column: 1/3;
        .course_select {
          width: 100%;
        }
      }
      div:nth-child(6) {
        grid-column: 1/3;
        input {
          width: 100%;
        }
      }
      button {
        grid-column: 1/3;
        justify-self: center;
      }
      p {
        grid-column: 1/3;
        justify-self: center;
      }
    }
  }
`;
