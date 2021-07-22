import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import { Tech } from "../../components/Tech";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { ContainerDashboard } from "./styles";

export const Dashboard = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const { register, handleSubmit, reset } = useForm();

  const loadTechs = () => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        const apiTechs = resp.data.techs;
        setTechs(apiTechs);
      });
  };
  console.log(techs);

  useEffect(() => {
    loadTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = ({ title, status }) => {
    api
      .post(
        "users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => loadTechs());

    reset();
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <ContainerDashboard>
      <section>
        <h2>Adicionar Tecnologia</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="title" placeholder="Nome" />
          <Input register={register} name="status" placeholder="Nível" />
          <Button type="submit">ADD</Button>
        </form>
      </section>

      <section>
        <h2>Tecnologias</h2>
        {techs.map((tech) => (
          <Tech key={tech.id} title={tech.title} status={tech.status} />
        ))}
      </section>
    </ContainerDashboard>
  );
};
