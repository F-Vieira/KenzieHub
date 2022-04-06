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

const Signup = () => {
  return (
    <S.Container>
      <Form>
        <Input icon={MdEmail} name="email" placeholder="E-mail" />
        <Input icon={MdLock} name="password" placeholder="Senha" />
        <Input icon={MdPerson} name="name" placeholder="Nome" />
        <Input icon={MdBiotech} name="bio" placeholder="Bio" />
        <Input icon={MdContacts} name="contact" placeholder="Contato" />
        <Input
          icon={MdGolfCourse}
          name="course"
          placeholder="Módulo do Curso"
        />
        <Button>Cadastrar</Button>
      </Form>
    </S.Container>
  );
};

export default Signup;
