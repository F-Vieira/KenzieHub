import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import * as S from "./styles";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdBiotech,
  MdContacts,
  MdGolfCourse,
} from "react-icons/md";
import { useState } from "react";
import FormFooter from "../../components/FormFooter";
import Logo from "../../components/Logo";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const Signup = () => {
  const [part, setPart] = useState(1);

  return (
    <S.Container>
      <Form>
        <Logo>ZHub</Logo>
        {part === 1 && (
          <>
            <Input icon={MdPerson} name="name" placeholder="Nome" />
            <Input icon={MdEmail} name="email" placeholder="E-mail" />
            <Input icon={MdContacts} name="contact" placeholder="Contato" />
            <Input icon={MdLock} name="password" placeholder="Senha" />
            <Button whiteMode onClick={() => setPart(2)}>
              Próximo
            </Button>
          </>
        )}
        {part === 2 && (
          <>
            <Textarea placeholder="Bio" />
            <Select />

            <div className="boxButton">
              <Button whiteMode onClick={() => setPart(1)}>
                Anterior
              </Button>
              <Button>Cadastrar</Button>
            </div>
          </>
        )}
        <FormFooter redirectTo="/login" textLink=" Faça login">
          Já possui conta?
        </FormFooter>
      </Form>
    </S.Container>
  );
};

export default Signup;
