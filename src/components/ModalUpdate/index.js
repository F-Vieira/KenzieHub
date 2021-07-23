import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "../Button";
import { api } from "../../services/api";

import { ContainerModal, FormUpdate } from "./styles";

export const ModalUpdate = ({
  show,
  setShow,
  techs,
  setTechs,
  updateTech,
  token,
}) => {
  const [statusTech] = useState([
    { id: 0, status: "Escolha um Nível" },
    { id: 1, status: "Iniciante" },
    { id: 2, status: "Intermediário" },
    { id: 3, status: "Avançado" },
  ]);

  const { register, handleSubmit, reset } = useForm();

  const handleUpdate = ({ status }) => {
    const idTech = updateTech.id;

    if (status !== statusTech[0].status) {
      api
        .put(
          `/users/techs/${idTech}`,
          {
            status: status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((resp) => {
          const newTechs = techs.map((tech) => {
            if (tech.id === idTech) {
              return resp.data;
            }
            return tech;
          });
          setTechs(newTechs);
          toast.success("Nível Alterado com sucesso");
        })
        .catch((err) => console.log(err));
      setShow(false);
      reset();
    } else {
      toast.error("É preciso escolher um Nível");
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <ContainerModal hidden={!show}>
      <FormUpdate onSubmit={handleSubmit(handleUpdate)}>
        <button type="button" onClick={handleClose}>
          <ImCross />
        </button>

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
        <Button type="submit">UPDATE</Button>
      </FormUpdate>
    </ContainerModal>
  );
};
