import styled, { css } from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 80%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;
export const FormUpdate = styled.form`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-blue);
  border-radius: 10px;
  box-shadow: 3px 4px 18px 10px rgba(0, 0, 0, 0.76);
`;
