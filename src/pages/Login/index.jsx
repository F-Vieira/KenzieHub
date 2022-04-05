import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  return (
    <>
      <Form>
        <Input icon={MdEmail} name="email" placeholder="E-mail" />
        <Input
          icon={MdLock}
          name="password"
          placeholder="Senha"
          type="password"
        />
        <Button>Entrar</Button>
      </Form>
    </>
  );
};

export default Login;
