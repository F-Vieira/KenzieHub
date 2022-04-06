import * as FF from "./styles";
import { Link } from "react-router-dom";

const FormFooter = ({ children, redirectTo, textLink }) => {
  return (
    <FF.Container>
      {children}
      <Link to={redirectTo}>{textLink}</Link>
    </FF.Container>
  );
};

export default FormFooter;
