import { ContainerTech } from "./styles";
import { Button } from "../Button";

export const Tech = ({ title, status, onClickDel, onClickUp }) => {
  return (
    <ContainerTech>
      <div>
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <div>
        <Button onClick={onClickUp}>UPDATE</Button>
        <Button onClick={onClickDel}>DELETE</Button>
      </div>
    </ContainerTech>
  );
};
