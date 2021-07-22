import styled from "styled-components";

export const ContainerBtn = styled.button`
  width: 250px;
  height: 50px;
  background: ${(props) => (props.whiteSchema ? "#E3F3FD" : "#007FF6")};
  color: ${(props) => (props.whiteSchema ? "#007FF6" : "#E3F3FD")};
  font-size: 24px;
  border-radius: 8px;
  border: 2px solid transparent;

  :hover {
  }
`;
