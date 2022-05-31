import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdEmail, MdLock, MdPerson, MdContacts } from "react-icons/md";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import FormFooter from "../../components/FormFooter";
import Logo from "../../components/Logo";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import * as S from "./styles";
import { useUser } from "../../providers/User";
import { toast } from "react-toastify";

const Signup = () => {
  const [part, setPart] = useState(1);

  const schema = yup.object().shape({
    name: yup.string().required("Precisa do Nome!"),
    email: yup.string().email("E-mail inválido").required("Precisa do E-mail!"),
    contact: yup.string().required("Precisa de uma forma de contato"),
    password: yup
      .string()
      .min(6, "O mínimo é 6 digitos!")
      .required("Precisa de uma senha!"),
    bio: yup.string(),
    course_module: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSignup } = useUser();

  const onSubmit = (data) => {
    handleSignup(data);
  };

  return (
    <S.Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo>ZHub</Logo>
        {part === 1 && (
          <>
            <Input
              icon={MdPerson}
              register={register}
              name="name"
              placeholder="Nome"
              error={errors.name?.message}
            />
            <Input
              icon={MdEmail}
              register={register}
              name="email"
              placeholder="E-mail"
              error={errors.email?.message}
            />
            <Input
              icon={MdContacts}
              register={register}
              name="contact"
              placeholder="Contato"
              error={errors.contact?.message}
            />
            <Input
              icon={MdLock}
              register={register}
              name="password"
              placeholder="Senha"
              error={errors.password?.message}
            />
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
              <Button type="submit">Cadastrar</Button>
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
