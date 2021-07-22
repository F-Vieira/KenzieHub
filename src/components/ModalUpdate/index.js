import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { ContainerModal, FormUpdate } from "./styles";
import { api } from "../../services/api";

export const ModalUpdate = ({
  show,
  setShow,
  techs,
  setTechs,
  updateTech,
  token,
}) => {
  const { register, handleSubmit } = useForm();

  const handleUpdate = ({ status }) => {
    const idTech = updateTech.id;

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
      })
      .catch((err) => console.log(err));
    setShow(false);
  };

  return (
    <ContainerModal hidden={!show}>
      <FormUpdate onSubmit={handleSubmit(handleUpdate)}>
        <Input register={register} name="status" placeholder="Novo Nível" />
        <Button type="submit">UPDATE</Button>
      </FormUpdate>
    </ContainerModal>
  );
};
