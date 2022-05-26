import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import * as L from "./styles";
import Logo from "../../components/Logo";
import FormFooter from "../../components/FormFooter";

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
        <FormFooter redirectTo="/signup" textLink=" Crie uma conta.">
          É novo?
        </FormFooter>
      </Form>
    </L.Container>
  );
};

export default Login;
