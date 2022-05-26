import styled from "styled-components";

export const Container = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;

  margin: 10px 0;

  background-color: ${({ whiteMode }) => (whiteMode ? "#0C1D0A" : "#020C0155")};
  color: var(--white);
  border: 2px solid var(--light_green);
  border-color: ${({ whiteMode }) => (whiteMode ? "#0C1D0A" : "#8EDE86")};

  font-weight: bold;
  letter-spacing: 1px;

  transition: 1s;
  :hover {
    background-color: var(--dark_green);
  }

  :focus {
    background-color: var(--dark_green);
  }
`;
