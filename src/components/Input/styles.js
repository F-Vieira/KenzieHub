import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 280px;
    height: 50px;
    border-radius: 10px;
    padding-left: 2rem;
    background-color: var(--snow-blue);
    &::placeholder {
      color: var(--dark-blue);
    }
  }

  span {
    height: 20px;
    color: var(--red);
    margin-top: 5px;
    margin-left: 10px;
  }
`;
