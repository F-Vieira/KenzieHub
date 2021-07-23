import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { ContainerSignup } from "./styles";
import { useState } from "react";

export const Signup = ({ authenticated }) => {
  const [courses] = useState([
    { id: 0, name: "Módulo do Curso" },
    { id: 1, name: "Primeiro módulo (Introdução ao Frontend)" },
    { id: 2, name: "Segundo módulo (Frontend Avançado)" },
    { id: 3, name: "Terceiro módulo (Introdução ao Backend)" },
    { id: 4, name: "Quarto módulo (Backend Avançado)" },
  ]);

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 digitos"),

    course_module: yup.string().required("Test"),
    courseChoice: yup.string().when("course_module", {
      is: "Módulo do Curso",
      then: yup.string().required("Escolha um módulo"),
    }),

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
      .catch((_) => {
        toast.error(
          "Erro ao criar a conta, verifique os dados e tente novamente"
        );
      });
  };

  if (authenticated) {
    return <Redirect to="dashboard" />;
  }

  return (
    <ContainerSignup>
      <h2>Cadastro</h2>
      <form id="signup" onSubmit={handleSubmit(onSubmit)}>
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
          type="password"
          error={errors.password?.message}
          placeholder="Senha"
        />

        <div className="container_course">
          <select
            defaultValue="Módulo do Curso"
            className="course_select"
            {...register("course_module")}
            form="signup"
          >
            {courses.map((item) =>
              item.id === 0 ? (
                <option disabled key={item.id} value={item.name}>
                  {item.name}
                </option>
              ) : (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              )
            )}
          </select>
          <span className="course_error">{errors.courseChoice?.message}</span>
        </div>
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
