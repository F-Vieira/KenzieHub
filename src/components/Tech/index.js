import { ContainerTech } from "./styles";
import { Button } from "../Button";
import { MdUpdate, MdRemove } from "react-icons/md";

export const Tech = ({ title, status, onClickDel, onClickUp }) => {
  return (
    <ContainerTech>
      <div>
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <div>
        <Button onClick={onClickUp}>
          <MdUpdate />
        </Button>
        <Button onClick={onClickDel}>
          <MdRemove />
        </Button>
      </div>
    </ContainerTech>
  );
};
