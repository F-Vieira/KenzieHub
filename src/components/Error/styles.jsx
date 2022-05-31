import styled from "styled-components";

export const Container = styled.ul`
  display: ${({ hasError }) => (hasError ? "block" : "none")};
  background-color: var(--light_green_transparent);
  color: var(--white);

  position: absolute;
  top: -65px;

  width: 280px;
  max-height: 100px;

  border-radius: 5px;

  padding: 0 10px;

  overflow: auto;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    margin-top: 5px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  margin: 5px 0;

  svg {
    margin-right: 2px;
  }
`;
