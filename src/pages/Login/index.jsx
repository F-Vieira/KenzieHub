import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import * as L from "./styles";

const Login = () => {
  return (
    <L.Container>
      <Form>
        <L.Logo>ZHub</L.Logo>
        <Input icon={MdEmail} name="email" placeholder="E-mail" />
        <Input
          icon={MdLock}
          name="password"
          placeholder="Senha"
          type="password"
        />
        <Button>Entrar</Button>
      </Form>
    </L.Container>
  );
};

export default Login;
