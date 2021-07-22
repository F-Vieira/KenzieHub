import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { ContainerSignup } from "./styles";

export const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 digitos"),
    course_module: yup.string().required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = ({ name, contact, email, password, course_module, bio }) => {
    const user = { name, contact, email, password, course_module, bio };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Cadastro criado com sucesso!");
        reset();
        return history.push("/login");
      })
      .catch((err) =>
        toast.error(
          "Erro ao criar a conta, verifique os dados e tente novamente"
        )
      );
  };

  return (
    <ContainerSignup>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="name"
          error={errors.name?.message}
          placeholder="Nome"
        />
        <Input
          register={register}
          name="contact"
          error={errors.contact?.message}
          placeholder="Contato"
        />
        <Input
          register={register}
          name="email"
          error={errors.email?.message}
          placeholder="E-mail"
        />
        <Input
          register={register}
          name="password"
          error={errors.password?.message}
          placeholder="Senha"
        />
        <Input
          register={register}
          name="course_module"
          error={errors.course_module?.message}
          placeholder="Curso"
        />
        <Input
          register={register}
          name="bio"
          error={errors.bio?.message}
          placeholder="Bio"
        />

        <Button type="submit">Cadastrar</Button>
        <p>
          Já possui conta? Faça <Link to="/login">Login</Link>
        </p>
      </form>
    </ContainerSignup>
  );
};
