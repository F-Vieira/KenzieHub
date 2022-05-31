import * as T from "./styles";

const Textarea = ({ placeholder, ...rest }) => {
  return <T.Container {...rest} placeholder={placeholder}></T.Container>;
};

export default Textarea;
