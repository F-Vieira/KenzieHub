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
            {/* <Input icon={MdBiotech} name="bio" placeholder="Bio" /> */}
            <textarea className="bio" placeholder="Bio" />
            <select>
              <option>Módulo do Curso</option>
              <option>Módulo 1</option>
              <option>Módulo 2</option>
              <option>Módulo 3</option>
            </select>
            <Input
              icon={MdGolfCourse}
              name="course"
              placeholder="Módulo do Curso"
            />
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
