import styled from "styled-components";

export const Container = styled.textarea`
  max-width: 80%;
  min-width: 80%;
  max-height: 100px;
  min-height: 100px;
  border-radius: 5px;
  border: 2px solid transparent;

  padding: 7px;
  margin: 10px 0;

  background-color: var(--dark_green);
  color: var(--light_green);

  transition: 1s;

  :focus-within {
    border: 2px solid var(--light_green);
  }

  ::placeholder {
    color: var(--light_green_transparent);
  }
`;
