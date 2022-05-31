import styled from "styled-components";

export const Container = styled.select`
  width: 80%;
  height: 40px;

  border-radius: 5px;
  border: 2px solid transparent;

  padding: 7px;
  margin: 10px 0;

  cursor: pointer;

  background-color: var(--dark_green);
  color: var(--light_green);

  transition: 1s;

  text-align: center;

  :focus-within {
    border: 2px solid var(--light_green);
  }
`;
