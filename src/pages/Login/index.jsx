import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import * as L from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <L.Container>
      <Form>
        <Logo>ZHub</Logo>
        <Input icon={MdEmail} name="email" placeholder="E-mail" />
        <Input
          icon={MdLock}
          name="password"
          placeholder="Senha"
          type="password"
        />
        <Button>Entrar</Button>
        <L.Footer>
          É novo? <Link to="/signup">Crie uma conta.</Link>
        </L.Footer>
      </Form>
    </L.Container>
  );
};

export default Login;
