import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import { Tech } from "../../components/Tech";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { ContainerDashboard } from "./styles";
import { ModalUpdate } from "../../components/ModalUpdate";

export const Dashboard = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [updateTech, setUpdateTech] = useState([]);
  const [show, setShow] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const { register, handleSubmit, reset } = useForm();

  const loadTechs = () => {
    const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        const apiTechs = resp.data.techs;
        setTechs(apiTechs);
      })
      .catch((err) => console.log(err));
  };

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

  const handleDelete = (id) => {
    const newTechs = techs.filter((tech) => tech.id !== id);

    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setTechs(newTechs));
  };

  const handleUpdate = (id) => {
    const findTech = techs.find((tech) => tech.id === id);
    setUpdateTech(findTech);
    setShow(true);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <ContainerDashboard>
      <ModalUpdate
        show={show}
        setShow={setShow}
        techs={techs}
        setTechs={setTechs}
        updateTech={updateTech}
        token={token}
      />

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
          <Tech
            key={tech.id}
            title={tech.title}
            status={tech.status}
            onClickDel={() => handleDelete(tech.id)}
            onClickUp={() => handleUpdate(tech.id)}
          />
        ))}
      </section>
    </ContainerDashboard>
  );
};
