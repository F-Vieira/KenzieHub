import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { ContainerLogin } from "./styles";
export const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo de 6 digitos"),
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

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        const { token, user } = resp.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        reset();
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha incorreta!"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ContainerLogin>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Login</Button>
        <p>
          É novo? <Link to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </ContainerLogin>
  );
};
