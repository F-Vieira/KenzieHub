import styled from "styled-components";

export const ContainerTech = styled.div`
  color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  div:first-child {
    width: 180px;
    height: 180px;
    background: var(--snow-blue);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    h3 {
      margin-bottom: 2rem;
    }
  }
  div + div {
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
      width: 85px;
      font-size: 18px;
    }
  }
`;
