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
import Error from "../../components/Error";

const Signup = () => {
  const [part, setPart] = useState(1);

  const schema = yup.object().shape({
    name: yup.string().required("Precisa do Nome!"),
    email: yup.string().email("E-mail inválido").required("Precisa do E-mail!"),
    contact: yup.string().required("Precisa de uma forma de contato"),
    password: yup
      .string()
      .min(6, "O mínimo da senha é 6 digitos!")
      .required("Precisa de uma senha!"),
    bio: yup.string().required("Precisa da bio"),
    course_module: yup.string(),
    courseChoice: yup.string().when("course_module", {
      is: "Escolha um módulo",
      then: yup.string().required("Escolha um módulo"),
    }),
  });

  const [courses] = useState([
    { id: 0, name: "Escolha um módulo" },
    { id: 1, name: "Primeiro módulo (Introdução ao Frontend)" },
    { id: 2, name: "Segundo módulo (Frontend Avançado)" },
    { id: 3, name: "Terceiro módulo (Introdução ao Backend)" },
    { id: 4, name: "Quarto módulo (Backend Avançado)" },
  ]);

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
      <Form id="signup" onSubmit={handleSubmit(onSubmit)}>
        <Error grossErrors={errors} />
        <Logo>ZHub</Logo>
        {part === 1 && (
          <>
            <Input
              icon={MdPerson}
              register={register}
              name="name"
              placeholder="Nome"
            />
            <Input
              icon={MdEmail}
              register={register}
              name="email"
              placeholder="E-mail"
            />
            <Input
              icon={MdContacts}
              register={register}
              name="contact"
              placeholder="Contato"
            />
            <Input
              icon={MdLock}
              register={register}
              name="password"
              placeholder="Senha"
            />
            <Button whiteMode onClick={() => setPart(2)}>
              Próximo
            </Button>
          </>
        )}
        {part === 2 && (
          <>
            <Textarea register={register} name="bio" placeholder="Bio" />
            <Select
              register={register}
              name="course_module"
              options={courses}
              form="signup"
            />

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
