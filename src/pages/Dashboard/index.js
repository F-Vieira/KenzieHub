import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Tech } from "../../components/Tech";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { ModalUpdate } from "../../components/ModalUpdate";

import { ContainerDashboard } from "./styles";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [techs, setTechs] = useState([]);
  const [updateTech, setUpdateTech] = useState([]);
  const [show, setShow] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [statusTech] = useState([
    { id: 0, status: "Escolha um Nível" },
    { id: 1, status: "Iniciante" },
    { id: 2, status: "Intermediário" },
    { id: 3, status: "Avançado" },
  ]);
  const { register, handleSubmit, reset } = useForm();

  const loadTechs = () => {
    api
      .get(`/profile/`, {
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

  const handleAdd = ({ title, status }) => {
    if (title !== "" && status !== statusTech[0].status) {
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
        .then((resp) => {
          loadTechs();
          toast.success("Tecnologia adicionada");
        })
        .catch((err) => toast.error("Tecnologia já cadastrada"));
      reset();
    } else {
      title === ""
        ? toast.error("Nome não informado!")
        : toast.error("Escolha um Nível!!");
    }
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

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.clear();
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
        <Button onClick={handleLogout} type="button">
          Logout
        </Button>

        <h2>Adicionar Tecnologia</h2>

        <form id="addTech" onSubmit={handleSubmit(handleAdd)}>
          <Input register={register} name="title" placeholder="Nome" />

          <div className="container_status">
            <select
              defaultValue="Escolha um Nível"
              className="status_select"
              {...register("status")}
              form="addTech"
            >
              {statusTech.map((item) =>
                item.id === 0 ? (
                  <option disabled key={item.id} value={item.status}>
                    {item.status}
                  </option>
                ) : (
                  <option key={item.id} value={item.status}>
                    {item.status}
                  </option>
                )
              )}
            </select>
          </div>
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
