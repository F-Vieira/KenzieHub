import * as F from "./styles";

const Form = ({ children, ...rest }) => {
  return <F.Container {...rest}>{children}</F.Container>;
};

export default Form;
