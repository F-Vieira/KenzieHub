import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  padding: 7px;

  background-color: var(--dark_green);
  color: var(--light_green);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;

  .show_password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  width: 60%;
  background-color: var(--dark_green);
  color: var(--light_green);

  ::placeholder {
    color: var(--light_green_transparent);
  }
`;
