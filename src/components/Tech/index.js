import { ContainerTech } from "./styles";
import { Button } from "../Button";

export const Tech = ({ title, status }) => {
  return (
    <ContainerTech>
      <div>
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <div>
        <Button>UPDATE</Button>
        <Button>DELETE</Button>
      </div>
    </ContainerTech>
  );
};
