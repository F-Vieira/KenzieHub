import { ContainerBtn } from "./styles";

export const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <ContainerBtn whiteSchema={whiteSchema} {...rest}>
      {children}
    </ContainerBtn>
  );
};
