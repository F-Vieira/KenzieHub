import * as B from "./styles";

const Button = ({ children, ...rest }) => {
  return <B.Container {...rest}>{children}</B.Container>;
};

export default Button;
